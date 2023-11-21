import { codeBlock } from 'common-tags';

import { type Assistant, type ConversationContext } from '../interfaces';

// TODO 可以考虑将该消息转发二次开发者处理
export async function processUnknownMessage(
  assistant: Assistant,
  ctx: ConversationContext,
) {
  return ctx.reply(codeBlock`
  ⊶ 系统提示
  ﹊
  暂时无法处理该类型的消息`);
}
