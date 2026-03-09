// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
                {
                    label: '开始使用', // 把原本的 Guides 改成中文
                    items: [
                        { label: '示例指南', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Web3 安全篇', // 你新的一级目录
                    autogenerate: { directory: 'beidaoleixing' }, // 自动扫描 web3-security 文件夹
                },
                {
                    label: 'Web3 出入金', // 另一个一级目录
                    autogenerate: { directory: 'web3_churujin' }, // 自动扫描 web3-ramp 文件夹
                },
                {
                    label: '参考资料', // 把原本的 Reference 改成中文
                    autogenerate: { directory: 'reference' },
                },
            ],
		}),
	],
});
