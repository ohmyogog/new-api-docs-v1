import { generateFiles } from 'fumadocs-openapi';
import { openapi } from '../src/lib/openapi';

void generateFiles({
  input: openapi,
  // 输出目录 - 生成的 MDX 文件将放在这里
  output: './content/docs/zh/api',
  // 按 tag 分组，每个 tag 生成一个页面
  per: 'tag',
  // 包含 API 描述
  includeDescription: true,
  // 添加自动生成注释
  addGeneratedComment: true,
})
  .then(() => {
    console.log('✅ OpenAPI 文档生成完成！');
  })
  .catch((err) => {
    console.error('❌ 生成失败:', err);
    process.exit(1);
  });
