//SDK利用準備
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Settings = {
	siteName: string;
	url: string;
	description: string;
	author: string;
};

export type Blog = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
};

export type BlogResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
};

//API settings の呼び出し
export const getSettings = async (queries?: MicroCMSQueries) => {
	return await client.get<Settings>({ endpoint: 'settings', queries });
};

//API blogs の呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({ endpoint: 'blogs', queries });
};

//API blogs詳細 の呼び出し
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	return await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId,
		queries,
	});
};
