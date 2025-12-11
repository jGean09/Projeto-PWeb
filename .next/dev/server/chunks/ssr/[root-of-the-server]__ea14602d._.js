module.exports = [
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"use client";
;
;
;
;
const VideosPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        promos: [],
        episodes: [],
        music_videos: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [videoType, setVideoType] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("all");
    const [animeInfo, setAnimeInfo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [youtubeTrailers, setYoutubeTrailers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loadingTrailers, setLoadingTrailers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // 1. PRIMEIRO: Carregar informações básicas do anime
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        async function loadAnimeInfo() {
            if (!id) return;
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                const json = await res.json();
                setAnimeInfo(json.data);
            } catch (error) {
                console.error("Erro ao carregar info do anime:", error);
            }
        }
        loadAnimeInfo();
    }, [
        id
    ]);
    // 2. SEGUNDO: Buscar vídeos da API do Jikan
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        async function loadVideos() {
            if (!id) return;
            setLoading(true);
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos`);
                const json = await res.json();
                console.log("Dados BRUTOS da API Jikan:", json.data); // DEBUG
                setVideos(json.data || {
                    promos: [],
                    episodes: [],
                    music_videos: []
                });
            } catch (error) {
                console.error("Erro ao carregar vídeos:", error);
            } finally{
                setLoading(false);
            }
        }
        loadVideos();
    }, [
        id
    ]);
    // 3. TERCEIRO: Buscar trailers do YouTube (fallback)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        async function searchYoutubeTrailers() {
            if (!animeInfo?.title) return;
            setLoadingTrailers(true);
            try {
                // Várias queries possíveis para achar trailers
                const queries = [
                    `${animeInfo.title} trailer`,
                    `${animeInfo.title} PV`,
                    `${animeInfo.title} promotional video`,
                    `${animeInfo.title} official trailer`,
                    `${animeInfo.title} トレーラー`
                ];
                // Para cada query, faz uma busca simulada
                const allTrailers = [];
                for (const query of queries){
                    // Esta é uma URL pública que não precisa de API key (mas tem limite)
                    // Em produção, você precisaria da API oficial do YouTube
                    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIYAQ%253D%253D`;
                    // Como não podemos fazer scraping do YouTube diretamente no frontend,
                    // vamos usar uma abordagem alternativa:
                    // 1. Buscar vídeos relacionados usando uma API pública alternativa
                    // 2. Ou usar iframe de busca do YouTube
                    allTrailers.push({
                        id: `trailer-${query}`,
                        title: `${animeInfo.title} - ${query}`,
                        url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
                        type: "trailer",
                        isYouTube: true,
                        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg` // placeholder
                    });
                }
                setYoutubeTrailers(allTrailers.slice(0, 5)); // Limita a 5 resultados
            } catch (error) {
                console.error("Erro ao buscar trailers:", error);
            } finally{
                setLoadingTrailers(false);
            }
        }
        // Só busca trailers se a API do Jikan não retornou promos
        if (animeInfo && videos.promos && videos.promos.length === 0) {
            searchYoutubeTrailers();
        }
    }, [
        animeInfo,
        videos.promos
    ]);
    // Juntar todos os vídeos
    const jikanVideos = [
        ...(videos.promos || []).map((video)=>({
                ...video,
                type: "trailer",
                source: "jikan",
                isYouTube: false
            })),
        ...(videos.episodes || []).map((video)=>({
                ...video,
                type: "episode",
                source: "jikan",
                isYouTube: false
            })),
        ...(videos.music_videos || []).map((video)=>({
                ...video,
                type: "music",
                source: "jikan",
                isYouTube: false
            }))
    ];
    // Adicionar trailers do YouTube se necessário
    const allVideos = [
        ...jikanVideos,
        ...jikanVideos.filter((v)=>v.type === "trailer").length === 0 ? youtubeTrailers : []
    ];
    // Filtrar vídeos
    const filteredVideos = allVideos.filter((video)=>{
        if (videoType === "all") return true;
        if (videoType === "episode") return video.type === "episode";
        if (videoType === "trailer") return video.type === "trailer";
        return true;
    });
    // Extrair ID do YouTube da URL
    const getYouTubeId = (url)=>{
        if (!url) return null;
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
    };
    // Gerar thumbnail do YouTube
    const getYouTubeThumbnail = (video)=>{
        if (video.thumbnail) return video.thumbnail;
        const youtubeId = getYouTubeId(video.url || video.video_url);
        if (youtubeId) {
            return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
        }
        // Placeholder baseado no tipo
        return `https://via.placeholder.com/300x169/${video.type === "trailer" ? "FF6B6B" : video.type === "episode" ? "4ECDC4" : "FFD166"}/000000?text=${encodeURIComponent(video.type.toUpperCase())}`;
    };
    // DEBUG: Mostrar estrutura dos dados
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!loading && animeInfo) {
            console.log("=== DEBUG VIDEOS ===");
            console.log("Anime:", animeInfo.title);
            console.log("Jikan Promos:", videos.promos?.length || 0);
            console.log("Jikan Episodes:", videos.episodes?.length || 0);
            console.log("YouTube Trailers:", youtubeTrailers.length);
            console.log("All Videos:", allVideos.length);
            console.log("===================");
        }
    }, [
        loading,
        animeInfo,
        videos,
        youtubeTrailers,
        allVideos
    ]);
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
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            style: {
                                color: "white",
                                margin: 0
                            },
                            children: animeInfo ? `Vídeos: ${animeInfo.title}` : "Vídeos do Anime"
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 15,
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 10,
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setVideoType("all"),
                                            style: {
                                                padding: "8px 15px",
                                                background: videoType === "all" ? "#1e88e5" : "#333",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                whiteSpace: "nowrap"
                                            },
                                            children: [
                                                "Todos (",
                                                allVideos.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setVideoType("trailer"),
                                            style: {
                                                padding: "8px 15px",
                                                background: videoType === "trailer" ? "#1e88e5" : "#333",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                whiteSpace: "nowrap"
                                            },
                                            children: [
                                                "Trailers (",
                                                allVideos.filter((v)=>v.type === "trailer").length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setVideoType("episode"),
                                            style: {
                                                padding: "8px 15px",
                                                background: videoType === "episode" ? "#1e88e5" : "#333",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                whiteSpace: "nowrap"
                                            },
                                            children: [
                                                "Episódios (",
                                                videos.episodes?.length || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
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
                                        children: "↩ Voltar ao Anime"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/[id]/videos.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(0, 0, 0, 0.7)",
                        padding: "15px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        color: "white",
                        fontSize: "14px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            animeInfo?.title || "Carregando...",
                            " |",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: " API Jikan:"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            videos.promos?.length || 0,
                            " trailer(s), ",
                            videos.episodes?.length || 0,
                            " episódio(s) |",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: " Fallback:"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            youtubeTrailers.length,
                            " trailer(s) do YouTube"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !loading && videos.promos?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(255, 152, 0, 0.2)",
                        border: "1px solid #FF9800",
                        padding: "15px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        color: "#FFCC80",
                        fontSize: "14px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            "⚠️ ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Atenção:"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 294,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0)),
                            " A API do Jikan não retornou trailers.",
                            youtubeTrailers.length > 0 ? " Mostrando trailers alternativos do YouTube." : " Buscando trailers alternativos..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        color: "white",
                        marginBottom: 20,
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "10px 15px",
                        borderRadius: "5px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            filteredVideos.length,
                            " vídeo",
                            filteredVideos.length !== 1 ? 's' : '',
                            " encontrado",
                            filteredVideos.length !== 1 ? 's' : '',
                            videoType !== "all" && ` (${videoType === "trailer" ? "Trailers" : "Episódios"})`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                loading || loadingTrailers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    style: {
                        color: "white",
                        textAlign: "center",
                        fontSize: "18px"
                    },
                    children: "Carregando vídeos..."
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 316,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredVideos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "40px",
                        background: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "10px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "white",
                            fontSize: "18px"
                        },
                        children: "Nenhum vídeo encontrado para este anime."
                    }, void 0, false, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 324,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 20
                    },
                    children: filteredVideos.map((video, index)=>{
                        const url = video.url || video.video_url || "#";
                        const isYouTube = video.isYouTube || url.includes("youtube.com") || url.includes("youtu.be");
                        const youtubeId = isYouTube ? getYouTubeId(url) : null;
                        const thumbnailUrl = getYouTubeThumbnail(video);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                background: "rgba(0, 0, 0, 0.8)",
                                borderRadius: 10,
                                overflow: "hidden",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                transition: "all 0.3s",
                                cursor: "pointer"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            },
                            onClick: (e)=>{
                                if (url === "#") {
                                    e.preventDefault();
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        paddingBottom: "56.25%"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: thumbnailUrl,
                                            alt: video.title,
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 373,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: "10px",
                                                left: "10px",
                                                background: video.source === "jikan" ? "#1e88e5" : "#FF0000",
                                                color: "white",
                                                padding: "3px 8px",
                                                borderRadius: "4px",
                                                fontSize: "10px",
                                                fontWeight: "bold"
                                            },
                                            children: video.source === "jikan" ? "Jikan API" : "YouTube"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 387,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                background: "rgba(255, 0, 0, 0.8)",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "20px",
                                                color: "white"
                                            },
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 402,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 372,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "15px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                color: "white",
                                                margin: "0 0 10px 0",
                                                fontSize: "16px",
                                                lineHeight: "1.4",
                                                height: "3.2em",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            },
                                            children: video.title
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 423,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginTop: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: video.type === "trailer" ? "#FF6B6B" : video.type === "episode" ? "#4ECDC4" : "#FFD166",
                                                        color: "white",
                                                        padding: "3px 10px",
                                                        borderRadius: "12px",
                                                        fontSize: "12px",
                                                        fontWeight: "bold"
                                                    },
                                                    children: video.type === "trailer" ? "🎬 Trailer" : video.type === "episode" ? "📺 Episódio" : "🎵 Música"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/[id]/videos.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "11px",
                                                        color: "#aaa",
                                                        fontStyle: "italic"
                                                    },
                                                    children: video.source === "jikan" ? "MyAnimeList" : "YouTube Search"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/[id]/videos.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/videos.tsx",
                                            lineNumber: 435,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/[id]/videos.tsx",
                                    lineNumber: 422,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/pages/[id]/videos.tsx",
                            lineNumber: 341,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                filteredVideos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "30px",
                        padding: "20px",
                        background: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "10px",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa",
                            margin: 0,
                            fontSize: "14px"
                        },
                        children: [
                            "• Trailers: ",
                            allVideos.filter((v)=>v.type === "trailer").length,
                            " | • Episódios: ",
                            allVideos.filter((v)=>v.type === "episode").length,
                            " | • Músicas: ",
                            allVideos.filter((v)=>v.type === "music").length,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/pages/[id]/videos.tsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            "• API Jikan: ",
                            jikanVideos.length,
                            " vídeos | • YouTube Fallback: ",
                            youtubeTrailers.length,
                            " trailers"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/videos.tsx",
                        lineNumber: 479,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/videos.tsx",
                    lineNumber: 472,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/[id]/videos.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/[id]/videos.tsx",
        lineNumber: 179,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__ea14602d._.js.map