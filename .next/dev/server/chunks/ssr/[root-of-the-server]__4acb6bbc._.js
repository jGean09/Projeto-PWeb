module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/SearchBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SearchBox({ onSearch }) {
    const [term, setTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function handleSubmit(e) {
        e.preventDefault();
        onSearch(term);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        style: {
            marginBottom: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: term,
                onChange: (e)=>setTerm(e.target.value),
                placeholder: "Buscar anime...",
                style: {
                    padding: "8px",
                    width: "250px",
                    marginRight: "10px",
                    border: "1px solid #ccc"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SearchBox.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                children: "Buscar"
            }, void 0, false, {
                fileName: "[project]/app/components/SearchBox.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SearchBox.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/AnimeCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AnimeCard({ anime }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "#1e1e1e",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s"
        },
        onMouseEnter: (e)=>{
            const target = e.currentTarget;
            target.style.transform = "translateY(-5px)";
            target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.6)";
        },
        onMouseLeave: (e)=>{
            const target = e.currentTarget;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: anime.images?.jpg?.image_url,
                alt: anime.title,
                style: {
                    width: "100%",
                    height: 240,
                    objectFit: "cover"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/AnimeCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            color: "white",
                            fontSize: 16,
                            margin: "0 0 6px 0",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        children: anime.title
                    }, void 0, false, {
                        fileName: "[project]/app/components/AnimeCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    anime.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#ccc",
                            fontSize: 14,
                            margin: 0
                        },
                        children: [
                            "Ano: ",
                            anime.year
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnimeCard.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    anime.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#f5c518",
                            fontSize: 14,
                            margin: "4px 0 0 0"
                        },
                        children: [
                            "⭐ ",
                            anime.score
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AnimeCard.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AnimeCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AnimeCard.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/actions/data:054c0d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60dd55a9786c773af334114db0467ef29f90e65cfd":"searchAnimeAction"},"app/actions/anime.ts",""] */ __turbopack_context__.s([
    "searchAnimeAction",
    ()=>searchAnimeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var searchAnimeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60dd55a9786c773af334114db0467ef29f90e65cfd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "searchAnimeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYW5pbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG4vLyBDYWNoZSBzaW1wbGVzIHBhcmEgcmF0ZSBsaW1pdGluZ1xyXG5jb25zdCByZXF1ZXN0UXVldWU6IEFycmF5PCgpID0+IFByb21pc2U8dm9pZD4+ID0gW107XHJcbmxldCBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NRdWV1ZSgpIHtcclxuICBpZiAoaXNQcm9jZXNzaW5nIHx8IHJlcXVlc3RRdWV1ZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICBcclxuICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xyXG4gIGF3YWl0IHJlcXVlc3RRdWV1ZS5zaGlmdCgpISgpO1xyXG4gIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gIFxyXG4gIC8vIERlbGF5IGVudHJlIHJlcXVlc3RzICgxLjUgc2VndW5kb3MgcGFyYSBzZWd1cmFuw6dhKVxyXG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxNTAwKSk7XHJcbiAgcHJvY2Vzc1F1ZXVlKCk7XHJcbn1cclxuXHJcbi8vIFNlcnZlciBBY3Rpb24gcGFyYSBidXNjYSBkZSBhbmltZXNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEFuaW1lQWN0aW9uKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICByZXF1ZXN0UXVldWUucHVzaChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtTRVJWRVJdIEJ1c2NhbmRvOiBcIiR7cXVlcnl9XCIgLSBQw6FnaW5hICR7cGFnZX1gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1cmwgPSBxdWVyeS50cmltKClcclxuICAgICAgICAgID8gYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC9hbmltZT9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mcGFnZT0ke3BhZ2V9JmxpbWl0PTI0YFxyXG4gICAgICAgICAgOiBgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3Y0L3NlYXNvbnMvbm93P3BhZ2U9JHtwYWdlfSZsaW1pdD0yNGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignW1NFUlZFUl0gUmF0ZSBsaW1pdCBhdGluZ2lkbywgYWd1YXJkYW5kby4uLicpO1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG4gICAgICAgICAgICAvLyBUZW50YSBtYWlzIHVtYSB2ZXpcclxuICAgICAgICAgICAgY29uc3QgcmV0cnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGlmICghcmV0cnlSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yOiAke3JldHJ5UmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJldHJ5RGF0YSA9IGF3YWl0IHJldHJ5UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHJldHJ5RGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW1NFUlZFUl0gJHtkYXRhLmRhdGE/Lmxlbmd0aCB8fCAwfSByZXN1bHRhZG9zIHBhcmEgXCIke3F1ZXJ5fVwiYCk7XHJcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbU0VSVkVSXSBFcnJvIG5hIGJ1c2NhOicsIGVycm9yKTtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcHJvY2Vzc1F1ZXVlKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIFNlcnZlciBBY3Rpb24gcGFyYSB0cmVuZGluZyBhbmltZXNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyZW5kaW5nQW5pbWVzQWN0aW9uKGxpbWl0OiBudW1iZXIgPSA2KSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmVxdWVzdFF1ZXVlLnB1c2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3Y0L3RvcC9hbmltZT9saW1pdD0ke2xpbWl0fWBcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHByb2Nlc3NRdWV1ZSgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBTZXJ2ZXIgQWN0aW9uIHBhcmEgZGV0YWxoZXMgZG8gYW5pbWVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFuaW1lRGV0YWlsc0FjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmVxdWVzdFF1ZXVlLnB1c2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3Y0L2FuaW1lLyR7aWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBBUEkgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcHJvY2Vzc1F1ZXVlKCk7XHJcbiAgfSk7XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQW1Cc0IifQ==
}),
"[project]/app/search/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SearchBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnimeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AnimeCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$054c0d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:054c0d [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
function Page() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [term, setTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBackButton, setShowBackButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function loadItems(searchTerm, page) {
        if (loading) return;
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$054c0d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["searchAnimeAction"])(searchTerm, page);
            setItems(result.data || []);
            setTotalPages(result.pagination?.last_visible_page || 1);
            setCurrentPage(result.pagination?.current_page || 1);
            if (searchTerm && searchTerm.trim() !== "") {
                localStorage.setItem("lastAnimeSearch", searchTerm);
                setShowBackButton(true);
            }
        } catch (error) {
            console.error("Erro na busca:", error);
            setItems([]);
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const urlQuery = urlParams.get('q');
        if (urlQuery && urlQuery.trim() !== "") {
            setTerm(urlQuery);
            setShowBackButton(true);
            loadItems(urlQuery, 1);
        } else {
            const savedTerm = localStorage.getItem("lastAnimeSearch");
            if (savedTerm && savedTerm.trim() !== "") {
                setTerm(savedTerm);
                setShowBackButton(true);
                loadItems(savedTerm, 1);
            } else {
                loadItems("", 1);
            }
        }
    }, []);
    function handleSearch(newTerm) {
        setTerm(newTerm);
        setCurrentPage(1);
        setTotalPages(1);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        loadItems(newTerm, 1);
    }
    function goToPage(page) {
        if (page < 1 || page > totalPages || loading) return;
        setCurrentPage(page);
        loadItems(term, page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function handleClearSearch() {
        setTerm("");
        setCurrentPage(1);
        setItems([]);
        setTotalPages(1);
        setShowBackButton(false);
        localStorage.removeItem("lastAnimeSearch");
        loadItems("", 1);
    }
    function getPageNumbers() {
        const pages = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        for(let i = startPage; i <= endPage; i++){
            pages.push(i);
        }
        return pages;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100vw",
            minHeight: "100vh",
            backgroundImage: "url('/scenario.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        className: "jsx-d732791046adfab6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "1000px",
                    marginBottom: "20px"
                },
                className: "jsx-d732791046adfab6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push('/'),
                    style: {
                        padding: "10px 20px",
                        background: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "all 0.3s",
                        border: "1px solid #4ECDC4"
                    },
                    className: "jsx-d732791046adfab6",
                    children: "Voltar para Home"
                }, void 0, false, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    marginBottom: 20
                },
                className: "jsx-d732791046adfab6",
                children: "Buscar Animes"
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SearchBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            term && term.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "1000px",
                    background: "rgba(0, 0, 0, 0.8)",
                    borderRadius: "10px",
                    padding: "15px 20px",
                    marginBottom: "20px",
                    marginTop: "20px",
                    border: "2px solid #1e88e5",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px"
                },
                className: "jsx-d732791046adfab6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "white"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "5px"
                                },
                                className: "jsx-d732791046adfab6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "20px"
                                        },
                                        className: "jsx-d732791046adfab6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "16px",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: [
                                            "Resultados para: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#90caf9"
                                                },
                                                className: "jsx-d732791046adfab6",
                                                children: term
                                            }, void 0, false, {
                                                fileName: "[project]/app/search/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "14px",
                                    color: "#aaa",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                },
                                className: "jsx-d732791046adfab6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d732791046adfab6",
                                        children: [
                                            "Página ",
                                            currentPage,
                                            " de ",
                                            totalPages
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d732791046adfab6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d732791046adfab6",
                                        children: [
                                            items.length,
                                            " animes nesta página"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClearSearch,
                        style: {
                            padding: "8px 16px",
                            background: "#ff4444",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            transition: "all 0.3s"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Limpar Busca"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 40,
                    textAlign: "center"
                },
                className: "jsx-d732791046adfab6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "50px",
                            height: "50px",
                            border: "5px solid rgba(255,255,255,0.1)",
                            borderTop: "5px solid #1e88e5",
                            borderRadius: "50%",
                            margin: "0 auto 15px",
                            animation: "spin 1s linear infinite"
                        },
                        className: "jsx-d732791046adfab6"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "white"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Carregando animes..."
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this),
            !loading && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                            gap: 20,
                            width: "100%",
                            maxWidth: 1000,
                            marginTop: "20px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: items.map((anime)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    localStorage.setItem("lastAnimeSearch", term);
                                    router.push(`/${anime.mal_id}`);
                                },
                                style: {
                                    cursor: "pointer"
                                },
                                className: "jsx-d732791046adfab6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AnimeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    anime: anime
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this)
                            }, anime.mal_id, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            flexWrap: "wrap"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToPage(currentPage - 1),
                                disabled: currentPage === 1 || loading,
                                style: {
                                    padding: "10px 20px",
                                    background: currentPage === 1 ? "#555" : "#1e88e5",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    opacity: currentPage === 1 ? 0.5 : 1
                                },
                                className: "jsx-d732791046adfab6",
                                children: "Anterior"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, this),
                            currentPage > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goToPage(1),
                                        style: {
                                            padding: "10px 16px",
                                            background: "rgba(255, 255, 255, 0.1)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 19
                                    }, this),
                                    currentPage > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "white"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: "..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true),
                            getPageNumbers().map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>goToPage(pageNum),
                                    style: {
                                        padding: "10px 16px",
                                        background: currentPage === pageNum ? "#4ECDC4" : "rgba(255, 255, 255, 0.1)",
                                        color: "white",
                                        border: currentPage === pageNum ? "2px solid #4ECDC4" : "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                        minWidth: "45px"
                                    },
                                    className: "jsx-d732791046adfab6",
                                    children: pageNum
                                }, pageNum, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, this)),
                            currentPage < totalPages - 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    currentPage < totalPages - 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "white"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: "..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 52
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goToPage(totalPages),
                                        style: {
                                            padding: "10px 16px",
                                            background: "rgba(255, 255, 255, 0.1)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: totalPages
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToPage(currentPage + 1),
                                disabled: currentPage === totalPages || loading,
                                style: {
                                    padding: "10px 20px",
                                    background: currentPage === totalPages ? "#555" : "#1e88e5",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    opacity: currentPage === totalPages ? 0.5 : 1
                                },
                                className: "jsx-d732791046adfab6",
                                children: "Próxima"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 267,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            !loading && items.length === 0 && term && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 40,
                    padding: 30,
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "12px",
                    textAlign: "center",
                    maxWidth: "600px",
                    width: "100%"
                },
                className: "jsx-d732791046adfab6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            color: "white",
                            marginBottom: "10px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Nenhum anime encontrado"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa",
                            marginBottom: "20px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            'Não encontramos resultados para "',
                            term,
                            '".'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClearSearch,
                        style: {
                            padding: "10px 20px",
                            background: "#4ECDC4",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Ver Animes da Temporada"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this),
            !loading && items.length === 0 && !term && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 40,
                    padding: 30,
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "12px",
                    textAlign: "center",
                    maxWidth: "600px",
                    width: "100%"
                },
                className: "jsx-d732791046adfab6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            color: "white",
                            marginBottom: "10px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Busque seu anime favorito"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Digite o nome de um anime na barra de busca acima para começar."
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 408,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d732791046adfab6",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/search/page.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4acb6bbc._.js.map