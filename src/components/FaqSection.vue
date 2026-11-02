<script setup>
import { ref } from 'vue';

const openFaq = ref('root');

const faqs = [
  {
    value: 'root',
    title: '需要 root 手机吗？',
    answer: '不需要。基础连接、设备管理与应用列表可以通过 ADB 使用；画面采集、电脑接管输入法等部分能力需要 Shizuku 授权。',
  },
  {
    value: 'connect',
    title: '手机要怎么连接？',
    answer: '可以先通过 USB 开启调试后连接，也可以使用无线调试配对。设备端 App、scrcpy 采集器和 adb 都会随桌面端安装包准备。',
  },
  {
    value: 'versions',
    title: '各功能需要什么系统版本？',
    answer: '桌面端支持 Windows 10/11 x64 与 Linux x64，Windows 11 22H2 起支持虚拟摄像头。设备端最低为 Android 11；Android 12 起支持摄像头采集，Android 13 起支持按应用音频隔离，Android 16 起支持桌面相机。',
  },
];

function openIssues() {
  window.open('https://github.com/slime7/droid-haruka/issues', '_blank', 'noopener');
}
</script>

<template>
  <section
    id="questions"
    class="questions"
    aria-labelledby="questions-title"
  >
    <mat-container>
      <div class="questions-layout">
        <div class="questions-aside">
          <p class="section-kicker">
            <span aria-hidden="true" />Before you connect
          </p>
          <mat-text
            id="questions-title"
            as="h2"
            type="display"
            size="medium"
            emphasized
            class="section-title"
          >
            常见问题
          </mat-text>
          <mat-text
            as="p"
            type="body"
            size="large"
            class="section-lead"
          >
            连接前最常见的几件事。如果没有找到答案，可以直接在 GitHub 上反馈。
          </mat-text>

          <mat-card
            variant="outlined"
            rounded="large"
            class="support-card"
          >
            <div class="support-card__icon">
              <mat-icon
                icon="forum"
                size="20px"
                aria-hidden="true"
              />
            </div>
            <div>
              <mat-text
                as="p"
                type="title"
                size="small"
                class="support-card__title"
              >
                还有别的问题？
              </mat-text>
              <mat-text
                as="p"
                type="body"
                size="small"
                class="support-card__desc"
              >
                在 Issues 中描述设备型号与连接方式，会更容易定位问题。
              </mat-text>
            </div>
            <mat-btn
              variant="text"
              suffix="arrow_outward"
              @click="openIssues"
            >
              前往 Issues
            </mat-btn>
          </mat-card>
        </div>

        <mat-expansion
          v-model="openFaq"
          :multiple="false"
          class="faq-list"
        >
          <mat-expansion-panel
            v-for="faq in faqs"
            :key="faq.value"
            :value="faq.value"
            :title="faq.title"
            :split="false"
          >
            <p class="faq-answer">
              {{ faq.answer }}
            </p>
          </mat-expansion-panel>
        </mat-expansion>
      </div>
    </mat-container>
  </section>
</template>

<style scoped>
.questions {
  padding-block: clamp(48px, 7vw, 84px) clamp(72px, 10vw, 128px);
}

.questions-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(28px, 6vw, 72px);
  align-items: start;
}

.questions-aside {
  position: sticky;
  inset-block-start: 96px;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: var(--mat-sys-color-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-kicker span {
  inline-size: 22px;
  block-size: 2px;
  background: currentColor;
  border-radius: 99px;
}

.section-title {
  display: block;
  margin: 0;
  font-family: var(--promo-font-display);
  font-size: clamp(1.9rem, 4vw, 3rem);
  font-weight: 740;
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.section-lead {
  display: block;
  max-inline-size: 36ch;
  margin-block-start: 14px;
  color: var(--mat-sys-color-on-surface-variant);
  line-height: 1.75;
}

.support-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px 12px;
  align-items: start;
  margin-block-start: 28px;
  padding: 16px;
}

.support-card__icon {
  display: grid;
  place-items: center;
  inline-size: 38px;
  block-size: 38px;
  color: var(--mat-sys-color-on-tertiary-container);
  background: var(--mat-sys-color-tertiary-container);
  border-radius: 12px;
}

.support-card__title {
  display: block;
  margin: 0;
  font-weight: 680;
}

.support-card__desc {
  display: block;
  margin: 3px 0 0;
  color: var(--mat-sys-color-on-surface-variant);
  line-height: 1.6;
}

.support-card mat-btn {
  grid-column: 1 / -1;
  justify-self: start;
  margin-inline-start: -10px;
}

.faq-list {
  min-inline-size: 0;
}

.faq-answer {
  margin: 0;
  padding: 2px 18px 18px;
  color: var(--mat-sys-color-on-surface-variant);
  font-size: 13.5px;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .questions-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .questions-aside {
    position: static;
  }

  .section-lead {
    max-inline-size: 56ch;
  }

  .support-card {
    max-inline-size: 480px;
  }
}
</style>
