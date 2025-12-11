module.exports = [
"[project]/app/actions/anime.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4032cf25604a01585d3fec3931d854c1b0e16ef979":"getTrendingAnimesAction","40facd449cafce53adeb62cf8bc4594ab2e0af47a2":"getAnimeDetailsAction","60dd55a9786c773af334114db0467ef29f90e65cfd":"searchAnimeAction"},"",""] */ __turbopack_context__.s([
    "getAnimeDetailsAction",
    ()=>getAnimeDetailsAction,
    "getTrendingAnimesAction",
    ()=>getTrendingAnimesAction,
    "searchAnimeAction",
    ()=>searchAnimeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
// Cache simples para rate limiting
const requestQueue = [];
let isProcessing = false;
async function processQueue() {
    if (isProcessing || requestQueue.length === 0) return;
    isProcessing = true;
    await requestQueue.shift()();
    isProcessing = false;
    // Delay entre requests (1.5 segundos para segurança)
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    processQueue();
}
async function searchAnimeAction(query, page = 1) {
    return new Promise((resolve, reject)=>{
        requestQueue.push(async ()=>{
            try {
                console.log(`[SERVER] Buscando: "${query}" - Página ${page}`);
                const url = query.trim() ? `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&page=${page}&limit=24` : `https://api.jikan.moe/v4/seasons/now?page=${page}&limit=24`;
                const response = await fetch(url, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (!response.ok) {
                    if (response.status === 429) {
                        console.warn('[SERVER] Rate limit atingido, aguardando...');
                        await new Promise((resolve)=>setTimeout(resolve, 3000));
                        // Tenta mais uma vez
                        const retryResponse = await fetch(url);
                        if (!retryResponse.ok) {
                            throw new Error(`API error: ${retryResponse.status}`);
                        }
                        const retryData = await retryResponse.json();
                        resolve(retryData);
                        return;
                    }
                    throw new Error(`API error: ${response.status}`);
                }
                const data = await response.json();
                console.log(`[SERVER] ${data.data?.length || 0} resultados para "${query}"`);
                resolve(data);
            } catch (error) {
                console.error('[SERVER] Erro na busca:', error);
                reject(error);
            }
        });
        processQueue();
    });
}
async function getTrendingAnimesAction(limit = 6) {
    return new Promise((resolve, reject)=>{
        requestQueue.push(async ()=>{
            try {
                const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${limit}`);
                if (!response.ok) throw new Error(`API error: ${response.status}`);
                const data = await response.json();
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
        processQueue();
    });
}
async function getAnimeDetailsAction(id) {
    return new Promise((resolve, reject)=>{
        requestQueue.push(async ()=>{
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                if (!response.ok) throw new Error(`API error: ${response.status}`);
                const data = await response.json();
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
        processQueue();
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    searchAnimeAction,
    getTrendingAnimesAction,
    getAnimeDetailsAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchAnimeAction, "60dd55a9786c773af334114db0467ef29f90e65cfd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTrendingAnimesAction, "4032cf25604a01585d3fec3931d854c1b0e16ef979", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAnimeDetailsAction, "40facd449cafce53adeb62cf8bc4594ab2e0af47a2", null);
}),
"[project]/.next-internal/server/app/search/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/anime.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$anime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/anime.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/search/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/anime.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60dd55a9786c773af334114db0467ef29f90e65cfd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$anime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchAnimeAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$search$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$anime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/search/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/anime.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$anime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/anime.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_8412ef4b._.js.map