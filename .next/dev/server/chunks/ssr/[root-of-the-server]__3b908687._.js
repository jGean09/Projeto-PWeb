module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/pages/[id]/videos.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
const VideosPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [animeInfo, setAnimeInfo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [youtubeTrailers, setYoutubeTrailers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    // 1. Carregar informações do anime
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        async function loadAnimeInfo() {
            if (!id) return;
            setLoading(true);
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                const json = await res.json();
                setAnimeInfo(json.data);
                // Buscar trailers baseados no anime
                await searchTrailers(json.data);
            } catch (error) {
                console.error("Erro:", error);
            } finally{
                setLoading(false);
            }
        }
        loadAnimeInfo();
    }, [
        id
    ]);
    // 2. Buscar trailers otimizados
    const searchTrailers = async (animeData)=>{
        try {
            // URLs de busca direta no YouTube
            const trailerQueries = [
                `${animeData.title} Official Trailer`,
                `${animeData.title} PV`,
                `${animeData.title} Opening`,
                `${animeData.title} Anime Trailer`,
                `${animeData.title} CM`
            ];
            // Usar thumbnails do próprio anime
            const animeThumbnail = animeData.images?.jpg?.large_image_url || animeData.images?.jpg?.image_url || `https://placehold.co/300x169/1e88e5/white?text=${encodeURIComponent(animeData.title.substring(0, 20))}`;
            const trailers = trailerQueries.map((query, index)=>({
                    id: `trailer-${index}`,
                    title: query.replace(animeData.title + " ", ""),
                    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
                    thumbnail: animeThumbnail,
                    type: "trailer"
                }));
            setYoutubeTrailers(trailers);
        } catch (error) {
            console.error("Erro ao buscar trailers:", error);
        }
    };
    // 3. Extrair ID do YouTube (para futuro embed)
    const getYouTubeId = (url)=>{
        if (!url) return null;
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            minHeight: "100vh",
            backgroundImage: "url('/detail.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            padding: "20px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            className: "jsx-7a90291f0de70b21",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 30,
                        flexWrap: "wrap",
                        gap: 15
                    },
                    className: "jsx-7a90291f0de70b21",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-7a90291f0de70b21",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    style: {
                                        color: "white",
                                        margin: "0 0 5px 0"
                                    },
                                    className: "jsx-7a90291f0de70b21",
                                    children: animeInfo?.title || "Carregando..."
                                }, void 0, false, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#aaa",
                                        margin: 0,
                                        fontSize: "16px"
                                    },
                                    className: "jsx-7a90291f0de70b21",
                                    children: "Trailers e Vídeos"
                                }, void 0, false, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${id}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                style: {
                                    padding: "10px 20px",
                                    background: "#333",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap"
                                },
                                className: "jsx-7a90291f0de70b21",
                                children: "↩ Voltar"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(0, 0, 0, 0.7)",
                        padding: "12px 15px",
                        borderRadius: "8px",
                        marginBottom: "25px",
                        color: "white",
                        fontSize: "14px"
                    },
                    className: "jsx-7a90291f0de70b21",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0
                        },
                        className: "jsx-7a90291f0de70b21",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                className: "jsx-7a90291f0de70b21",
                                children: "Anime:"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            animeInfo?.title || "Carregando...",
                            animeInfo?.year && ` (${animeInfo.year})`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !loading && youtubeTrailers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(30, 136, 229, 0.15)",
                        border: "1px solid #1e88e5",
                        padding: "15px",
                        borderRadius: "8px",
                        marginBottom: "25px",
                        color: "#90caf9",
                        fontSize: "14px"
                    },
                    className: "jsx-7a90291f0de70b21",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0
                        },
                        className: "jsx-7a90291f0de70b21",
                        children: [
                            "🔍 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                className: "jsx-7a90291f0de70b21",
                                children: "Trailers do YouTube:"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 148,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Clique em qualquer card para buscar no YouTube"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "60px 20px",
                        background: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "10px"
                    },
                    className: "jsx-7a90291f0de70b21",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                width: "50px",
                                height: "50px",
                                border: "5px solid #333",
                                borderTop: "5px solid #1e88e5",
                                borderRadius: "50%",
                                margin: "0 auto 20px",
                                animation: "spin 1s linear infinite"
                            },
                            className: "jsx-7a90291f0de70b21"
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                color: "white",
                                fontSize: "18px"
                            },
                            className: "jsx-7a90291f0de70b21",
                            children: "Buscando trailers..."
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : youtubeTrailers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "40px",
                        background: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "10px"
                    },
                    className: "jsx-7a90291f0de70b21",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                color: "white",
                                fontSize: "18px",
                                marginBottom: "15px"
                            },
                            className: "jsx-7a90291f0de70b21",
                            children: "Nenhum trailer encontrado."
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>animeInfo && searchTrailers(animeInfo),
                            style: {
                                padding: "10px 20px",
                                background: "#1e88e5",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontWeight: "bold"
                            },
                            className: "jsx-7a90291f0de70b21",
                            children: "🔄 Tentar Novamente"
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 20
                    },
                    className: "jsx-7a90291f0de70b21",
                    children: youtubeTrailers.map((trailer, index)=>{
                        const youtubeId = getYouTubeId(trailer.url);
                        const hasYouTubeLink = youtubeId ? `https://youtube.com/watch?v=${youtubeId}` : trailer.url;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: hasYouTubeLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                background: "rgba(0, 0, 0, 0.85)",
                                borderRadius: 10,
                                overflow: "hidden",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.5)";
                                e.currentTarget.style.borderColor = "#1e88e5";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                            },
                            className: "jsx-7a90291f0de70b21",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        paddingBottom: "56.25%"
                                    },
                                    className: "jsx-7a90291f0de70b21",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: trailer.thumbnail,
                                            alt: trailer.title,
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            },
                                            className: "jsx-7a90291f0de70b21"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 239,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                                                padding: "15px"
                                            },
                                            className: "jsx-7a90291f0de70b21",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    color: "white",
                                                    margin: 0,
                                                    fontSize: "16px",
                                                    lineHeight: "1.4"
                                                },
                                                className: "jsx-7a90291f0de70b21",
                                                children: trailer.title
                                            }, void 0, false, {
                                                fileName: "[project]/pages/[id]/videos.tsx",
                                                lineNumber: 261,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 253,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                background: "rgba(255, 0, 0, 0.85)",
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "24px",
                                                color: "white",
                                                border: "3px solid white"
                                            },
                                            className: "jsx-7a90291f0de70b21",
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 238,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "15px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    },
                                    className: "jsx-7a90291f0de70b21",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: "#1e88e5",
                                                color: "white",
                                                padding: "5px 12px",
                                                borderRadius: "20px",
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px"
                                            },
                                            className: "jsx-7a90291f0de70b21",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "14px"
                                                    },
                                                    className: "jsx-7a90291f0de70b21",
                                                    children: "🎬"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/[id]/videos.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Trailer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 299,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#aaa",
                                                fontSize: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px"
                                            },
                                            className: "jsx-7a90291f0de70b21",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7a90291f0de70b21",
                                                    children: "🔗"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/[id]/videos.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " YouTube"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 293,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, trailer.id, true, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 210,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                    id: "7a90291f0de70b21",
                    children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
                }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/[id]/videos.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/[id]/videos.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VideosPage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b908687._.js.map