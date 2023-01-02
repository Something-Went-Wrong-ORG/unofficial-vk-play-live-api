const USER_AGENTS = [
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 RuxitSynthetic/1.0 v5984752886319290287 t7325514408114621287 ath5ee645e0 altpriv cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 RuxitSynthetic/1.0 v5277347273 t8984854527901076038 athfa3c3975 altpub cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 RuxitSynthetic/1.0 v3421343014903855844 t4171297756416412358 ath259cea6f altpriv cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v2197586461287572997 t6651053852966445964 athe94ac249 altpriv cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 RuxitSynthetic/1.0 v4871161079369161779 t6454555150500562253 ath5ee645e0 altpriv cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 RuxitSynthetic/1.0 v16464110411 t6643906572558849902 athfa3c3975 altpub cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 RuxitSynthetic/1.0 v2507171974747346072 t5453667368085372556 ath5ee645e0 altpriv cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 RuxitSynthetic/1.0 v16464119827 t6643906572558849902 athfa3c3975 altpub cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 RuxitSynthetic/1.0 v6122573544871480936 t6759029105586231452 athe94ac249 altpriv cvcv=2 smf=0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 RuxitSynthetic/1.0 v8197856685664031438 t6905711685490802112 ath5ee645e0 altpriv cvcv=2 smf=0'
];

export const GetRandomUserAgent = () => USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];

export const GetAdditionalHeaders = () => ({
  'User-Agent': GetRandomUserAgent(),
  Referer: 'https://vkplay.live/d3l_ru'
});
