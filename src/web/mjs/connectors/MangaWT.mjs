import WordPressMadara from './templates/WordPressMadara.mjs';

export default class MangaWT extends WordPressMadara {

    constructor() {
        super();
        super.id = 'mangawt';
        super.label = 'MangaWT';
        this.tags = [ 'webtoon', 'turkish' ];
        this.url = 'https://www.mangawt.com';

        this.language = 'tr';
    }
}