module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

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
"[project]/components/SearchBox.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
function SearchBox({ onSearch }) {
    const [term, setTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    function handleSubmit(e) {
        e.preventDefault();
        onSearch(term);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        style: {
            marginBottom: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
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
                fileName: "[project]/components/SearchBox.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                type: "submit",
                children: "Buscar"
            }, void 0, false, {
                fileName: "[project]/components/SearchBox.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchBox.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AnimeCard.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimeCard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function AnimeCard({ anime }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: anime.images?.jpg?.image_url,
                alt: anime.title,
                style: {
                    width: "100%",
                    height: 240,
                    objectFit: "cover"
                }
            }, void 0, false, {
                fileName: "[project]/components/AnimeCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
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
                        fileName: "[project]/components/AnimeCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    anime.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                        fileName: "[project]/components/AnimeCard.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    anime.score && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                        fileName: "[project]/components/AnimeCard.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AnimeCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AnimeCard.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/search.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBox.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimeCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimeCard.tsx [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Page() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [term, setTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showBackButton, setShowBackButton] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Função para carregar animes
    async function loadItems(searchTerm, page) {
        if (loading) return;
        setLoading(true);
        try {
            const encodedTerm = encodeURIComponent(searchTerm.trim());
            let url;
            if (searchTerm && searchTerm.trim() !== "") {
                url = `https://api.jikan.moe/v4/anime?q=${encodedTerm}&page=${page}&limit=24`;
            } else {
                url = `https://api.jikan.moe/v4/seasons/now?page=${page}&limit=24`;
            }
            console.log(`Buscando: "${searchTerm}" | Página: ${page}`);
            // Delay para evitar rate limit
            await new Promise((resolve)=>setTimeout(resolve, 500));
            const res = await fetch(url);
            if (!res.ok) {
                if (res.status === 429) {
                    // Aguardar 3 segundos e tentar novamente
                    await new Promise((resolve)=>setTimeout(resolve, 3000));
                    return loadItems(searchTerm, page);
                }
                throw new Error(`Erro HTTP: ${res.status}`);
            }
            const json = await res.json();
            const data = json.data || [];
            const pagination = json.pagination || {
                current_page: 1,
                last_visible_page: 1,
                has_next_page: false,
                items: {
                    total: 0
                }
            };
            console.log(`Resultados: ${data.length} | Total: ${pagination.items.total} | Páginas: ${pagination.last_visible_page}`);
            setItems(data);
            setTotalPages(pagination.last_visible_page);
            setCurrentPage(pagination.current_page);
            // Salvar termo se for uma busca real
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
    // Inicialização
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
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
    // Função de busca
    function handleSearch(newTerm) {
        setTerm(newTerm);
        setCurrentPage(1);
        setTotalPages(1);
        // Limpar URL
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        loadItems(newTerm, 1);
    }
    // Navegar para página
    function goToPage(page) {
        if (page < 1 || page > totalPages || loading) return;
        setCurrentPage(page);
        loadItems(term, page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // Limpar busca
    function handleClearSearch() {
        setTerm("");
        setCurrentPage(1);
        setItems([]);
        setTotalPages(1);
        setShowBackButton(false);
        localStorage.removeItem("lastAnimeSearch");
        loadItems("", 1);
    }
    // Gerar array de páginas para mostrar
    function getPageNumbers() {
        const pages = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        // Ajustar se estiver perto do início
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        for(let i = startPage; i <= endPage; i++){
            pages.push(i);
        }
        return pages;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    maxWidth: "1000px",
                    marginBottom: "20px"
                },
                className: "jsx-d732791046adfab6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.background = "rgba(78, 205, 196, 0.3)";
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)";
                    },
                    className: "jsx-d732791046adfab6",
                    children: "🏠 Voltar para Home"
                }, void 0, false, {
                    fileName: "[project]/pages/search.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: {
                    color: "white",
                    marginBottom: 20
                },
                className: "jsx-d732791046adfab6",
                children: "Buscar Animes"
            }, void 0, false, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            term && term.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            color: "white"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "5px"
                                },
                                className: "jsx-d732791046adfab6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "20px"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "16px",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: [
                                            "Resultados para: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#90caf9"
                                                },
                                                className: "jsx-d732791046adfab6",
                                                children: term
                                            }, void 0, false, {
                                                fileName: "[project]/pages/search.tsx",
                                                lineNumber: 247,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "14px",
                                    color: "#aaa",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                },
                                className: "jsx-d732791046adfab6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-d732791046adfab6",
                                        children: [
                                            "📄 Página ",
                                            currentPage,
                                            " de ",
                                            totalPages
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-d732791046adfab6",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-d732791046adfab6",
                                        children: [
                                            "🎬 ",
                                            items.length,
                                            " animes nesta página"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "#cc0000";
                            e.currentTarget.style.transform = "scale(1.05)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "#ff4444";
                            e.currentTarget.style.transform = "scale(1)";
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-d732791046adfab6",
                                children: "🗑️"
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-d732791046adfab6",
                                children: "Limpar Busca"
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 40,
                    textAlign: "center"
                },
                className: "jsx-d732791046adfab6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "white"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Carregando animes..."
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this),
            !loading && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                            gap: 20,
                            width: "100%",
                            maxWidth: 1000,
                            marginTop: "20px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: items.map((anime)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    localStorage.setItem("lastAnimeSearch", term);
                                    router.push(`/${anime.mal_id}`);
                                },
                                style: {
                                    cursor: "pointer"
                                },
                                className: "jsx-d732791046adfab6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimeCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    anime: anime
                                }, void 0, false, {
                                    fileName: "[project]/pages/search.tsx",
                                    lineNumber: 332,
                                    columnNumber: 17
                                }, this)
                            }, anime.mal_id, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                children: "← Anterior"
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this),
                            currentPage > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 369,
                                        columnNumber: 19
                                    }, this),
                                    currentPage > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "white"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: "..."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 383,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true),
                            getPageNumbers().map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                    fileName: "[project]/pages/search.tsx",
                                    lineNumber: 389,
                                    columnNumber: 17
                                }, this)),
                            currentPage < totalPages - 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    currentPage < totalPages - 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "white"
                                        },
                                        className: "jsx-d732791046adfab6",
                                        children: "..."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 410,
                                        columnNumber: 52
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                        fileName: "[project]/pages/search.tsx",
                                        lineNumber: 411,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                                children: "Próxima →"
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 429,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 339,
                        columnNumber: 13
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px",
                            color: "white",
                            textAlign: "center",
                            fontSize: "14px",
                            background: "rgba(0, 0, 0, 0.5)",
                            padding: "10px 20px",
                            borderRadius: "8px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-d732791046adfab6",
                                children: [
                                    "📋 Página ",
                                    currentPage,
                                    " de ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    margin: "0 15px"
                                },
                                className: "jsx-d732791046adfab6",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 461,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-d732791046adfab6",
                                children: [
                                    "🎬 ",
                                    items.length,
                                    " animes por página"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 462,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    margin: "0 15px"
                                },
                                className: "jsx-d732791046adfab6",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "jsx-d732791046adfab6",
                                children: [
                                    "🔥 Total de páginas: ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 451,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            !loading && items.length === 0 && term && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "48px",
                            marginBottom: "10px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "😕"
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        style: {
                            color: "white",
                            marginBottom: "10px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Nenhum anime encontrado"
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa",
                            marginBottom: "20px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: [
                            'Não encontramos resultados para "',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#90caf9"
                                },
                                className: "jsx-d732791046adfab6",
                                children: term
                            }, void 0, false, {
                                fileName: "[project]/pages/search.tsx",
                                lineNumber: 486,
                                columnNumber: 46
                            }, this),
                            '". Tente usar termos diferentes ou verifique a ortografia.'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 472,
                columnNumber: 9
            }, this),
            !loading && items.length === 0 && !term && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "48px",
                            marginBottom: "10px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        style: {
                            color: "white",
                            marginBottom: "10px"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Busque seu anime favorito"
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#aaa"
                        },
                        className: "jsx-d732791046adfab6",
                        children: "Digite o nome de um anime na barra de busca acima para começar."
                    }, void 0, false, {
                        fileName: "[project]/pages/search.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/search.tsx",
                lineNumber: 508,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "d732791046adfab6",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/search.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c2cc4d1a._.js.map