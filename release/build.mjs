#!/usr/bin/env node

/**
 * 构建当前平台发行包，并固定更新仓库。
 */

import builder from 'electron-builder';
import { build as viteBuild } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import baseConfig from './electron-builder.js';
import sourceManifest from '../package.json' with { type: 'json' };

const APP_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const VITE_CONFIG_FILES = [
  'src/vite.main.config.js',
  'src/vite.preload.config.js',
  'src/vite.renderer.config.js',
];

/**
 * 解析 GitHub 仓库标识。
 * @param {string} repository 形如 owner/repo 的标识。
 * @returns {{ owner: string, repo: string }} 仓库所有者与名称。
 */
const parseRepository = (repository) => {
  const [owner, repo, ...rest] = String(repository).split('/');
  if (!owner || !repo || rest.length > 0) {
    throw new Error(`GITHUB_REPOSITORY 格式无效：${repository}`);
  }
  return { owner, repo };
};

/**
 * 生成用于打包的精简 package.json。
 * @returns {Record<string, unknown>} Electron 运行时清单。
 */
const createAppManifest = () => {
  const manifest = structuredClone(sourceManifest);
  delete manifest.devDependencies;
  delete manifest.scripts;

  const externals = new Set(manifest.external ?? []);
  for (const dependency of Object.keys(manifest.dependencies ?? {})) {
    if (!externals.has(dependency)) {
      delete manifest.dependencies[dependency];
    }
  }

  manifest.main = String(manifest.main).replace('dist/', '');
  return manifest;
};

/**
 * 构建主进程、preload 与渲染端资源。
 * @returns {Promise<void>}
 */
const buildVitePackages = async () => {
  await Promise.all(VITE_CONFIG_FILES.map((configFile) => viteBuild({
    configFile,
    mode: 'production',
  })));
};

/**
 * 为打包配置设置发行仓库。
 * @param {{ owner: string, repo: string }} repository 发行仓库标识。
 * @returns {import('electron-builder').Configuration} 打包配置。
 */
const createBuilderConfig = (repository) => ({
  ...baseConfig,
  publish: [
    {
      provider: 'github',
      owner: repository.owner,
      repo: repository.repo,
    },
  ],
});

/**
 * 检查自动更新元数据是否存在。
 * @param {string} outputDirectory electron-builder 输出目录。
 * @returns {void}
 */
const verifyUpdateMetadata = (outputDirectory) => {
  const metadataName = process.platform === 'win32' ? 'latest.yml' : 'latest-linux.yml';
  if (!fs.existsSync(resolve(outputDirectory, metadataName))) {
    throw new Error(`未生成自动更新元数据：${metadataName}`);
  }
};

/**
 * 执行当前平台打包。
 * @returns {Promise<void>}
 */
const main = async () => {
  const repository = parseRepository(
    process.env.GITHUB_REPOSITORY ?? 'slime7/droid-haruka'
  );
  process.env.MODE = 'production';
  process.chdir(APP_ROOT);

  await buildVitePackages();

  const config = createBuilderConfig(repository);
  const outputDirectory = resolve(APP_ROOT, config.directories?.app ?? 'dist');
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(
    resolve(outputDirectory, 'package.json'),
    `${JSON.stringify(createAppManifest(), null, 2)}\n`,
    'utf8'
  );

  const platform = builder.Platform.current();
  const targets = platform.createTarget();
  await builder.build({
    config,
    publish: 'never',
    targets,
  });
  verifyUpdateMetadata(resolve(APP_ROOT, config.directories?.output ?? 'dist_electron'));
};

try {
  await main();
} catch (error) {
  console.error('Release build failed:', error);
  process.exitCode = 1;
}
