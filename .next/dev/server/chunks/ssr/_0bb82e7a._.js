module.exports = [
"[project]/app/[id]/characters/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CharactersPage = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = params;
    const [characters, setCharacters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredCharacters, setFilteredCharacters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("name");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 20;
    const pageBackgroundStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        backgroundAttachment: "fixed",
        zIndex: -1
    };
    const contentStyle = {
        position: "relative",
        zIndex: 1,
        padding: "20px",
        paddingTop: "80px",
        minHeight: "100vh"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadCharacters() {
            if (!id) return;
            setLoading(true);
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
                const json = await res.json();
                const data = json.data || [];
                setCharacters(data);
                setFilteredCharacters(data);
            } catch (error) {
                console.error("Erro:", error);
            } finally{
                setLoading(false);
            }
        }
        loadCharacters();
    }, [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let results = characters;
        // Filtro por busca
        if (searchTerm.trim() !== "") {
            const term = searchTerm.toLowerCase();
            results = results.filter((character)=>character.character.name.toLowerCase().includes(term) || character.role.toLowerCase().includes(term) || character.voice_actors?.some((va)=>va.person.name.toLowerCase().includes(term)));
        }
        // Filtro por papel
        if (roleFilter !== "all") {
            results = results.filter((character)=>character.role.toLowerCase() === roleFilter.toLowerCase());
        }
        // Ordenação
        results.sort((a, b)=>{
            if (sortBy === "name") {
                return a.character.name.localeCompare(b.character.name);
            } else if (sortBy === "role") {
                return a.role.localeCompare(b.role);
            }
            return 0;
        });
        setFilteredCharacters(results);
        setCurrentPage(1); // Reset para primeira página ao filtrar
    }, [
        searchTerm,
        roleFilter,
        sortBy,
        characters
    ]);
    // Paginação
    const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCharacters = filteredCharacters.slice(startIndex, endIndex);
    const uniqueRoles = Array.from(new Set(characters.map((c)=>c.role.toLowerCase()))).sort();
    const handlePageChange = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: pageBackgroundStyle
            }, void 0, false, {
                fileName: "[project]/app/[id]/characters/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: contentStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 30,
                                flexWrap: "wrap",
                                gap: 15
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        color: "white",
                                        margin: 0,
                                        fontSize: "2.2rem",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                                        background: "rgba(0, 0, 0, 0.6)",
                                        padding: "15px 25px",
                                        borderRadius: "12px",
                                        border: "2px solid rgba(255, 255, 255, 0.1)"
                                    },
                                    children: "Personagens"
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(`/${id}`),
                                    style: {
                                        padding: "12px 25px",
                                        background: "linear-gradient(135deg, #1e88e5, #0d47a1)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        transition: "all 0.3s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        boxShadow: "0 4px 15px rgba(30, 136, 229, 0.4)"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.transform = "translateY(-3px)";
                                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(30, 136, 229, 0.6)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(30, 136, 229, 0.4)";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Voltar ao Anime"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[id]/characters/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "rgba(0, 0, 0, 0.8)",
                                padding: "25px",
                                borderRadius: "15px",
                                marginBottom: "30px",
                                backdropFilter: "blur(10px)",
                                border: "2px solid rgba(255, 255, 255, 0.15)",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "15px",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "🔍 Buscar por nome, papel ou dublador...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                style: {
                                                    padding: "14px 20px",
                                                    borderRadius: "10px",
                                                    border: "2px solid rgba(255, 255, 255, 0.2)",
                                                    background: "rgba(0, 0, 0, 0.9)",
                                                    color: "white",
                                                    flex: "1",
                                                    minWidth: "250px",
                                                    outline: "none",
                                                    fontSize: "16px",
                                                    transition: "all 0.3s"
                                                },
                                                onFocus: (e)=>e.target.style.borderColor = "#1e88e5",
                                                onBlur: (e)=>e.target.style.borderColor = "rgba(255, 255, 255, 0.2)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[id]/characters/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: roleFilter,
                                                onChange: (e)=>setRoleFilter(e.target.value),
                                                style: {
                                                    padding: "14px 45px 14px 20px",
                                                    borderRadius: "10px",
                                                    border: "2px solid rgba(255, 255, 255, 0.3)",
                                                    background: "rgba(0, 0, 0, 0.9)",
                                                    color: "white",
                                                    minWidth: "180px",
                                                    outline: "none",
                                                    cursor: "pointer",
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    transition: "all 0.3s",
                                                    appearance: "none",
                                                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "right 15px center",
                                                    backgroundSize: "20px"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = "#1e88e5",
                                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: " Todos os papéis"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    uniqueRoles.map((role, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: role,
                                                            children: role.charAt(0).toUpperCase() + role.slice(1)
                                                        }, index, false, {
                                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[id]/characters/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: sortBy,
                                                onChange: (e)=>setSortBy(e.target.value),
                                                style: {
                                                    padding: "14px 45px 14px 20px",
                                                    borderRadius: "10px",
                                                    border: "2px solid rgba(255, 255, 255, 0.3)",
                                                    background: "rgba(0, 0, 0, 0.9)",
                                                    color: "white",
                                                    minWidth: "180px",
                                                    outline: "none",
                                                    cursor: "pointer",
                                                    fontSize: "16px",
                                                    fontWeight: "500",
                                                    transition: "all 0.3s",
                                                    appearance: "none",
                                                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "right 15px center",
                                                    backgroundSize: "20px"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = "#4ECDC4",
                                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "name",
                                                        children: " Ordenar por nome"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "role",
                                                        children: " Ordenar por papel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[id]/characters/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            color: "white",
                                            fontSize: "16px",
                                            flexWrap: "wrap",
                                            gap: "15px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "15px",
                                                    flexWrap: "wrap"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#ffffff",
                                                            background: "rgba(30, 136, 229, 0.2)",
                                                            padding: "8px 16px",
                                                            borderRadius: "8px",
                                                            fontWeight: "bold"
                                                        },
                                                        children: [
                                                            filteredCharacters.length,
                                                            " personagem",
                                                            filteredCharacters.length !== 1 ? 's' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#90caf9",
                                                            background: "rgba(144, 202, 249, 0.1)",
                                                            padding: "8px 16px",
                                                            borderRadius: "8px"
                                                        },
                                                        children: [
                                                            '"',
                                                            searchTerm,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    roleFilter !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#81c784",
                                                            background: "rgba(129, 199, 132, 0.1)",
                                                            padding: "8px 16px",
                                                            borderRadius: "8px"
                                                        },
                                                        children: roleFilter
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#ffb74d",
                                                            background: "rgba(255, 183, 77, 0.1)",
                                                            padding: "8px 16px",
                                                            borderRadius: "8px"
                                                        },
                                                        children: [
                                                            "Página ",
                                                            currentPage,
                                                            " de ",
                                                            totalPages
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[id]/characters/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            (searchTerm || roleFilter !== "all") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSearchTerm("");
                                                    setRoleFilter("all");
                                                    setSortBy("name");
                                                },
                                                style: {
                                                    padding: "10px 20px",
                                                    background: "linear-gradient(135deg, #ff4444, #cc0000)",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    fontSize: "15px",
                                                    fontWeight: "bold",
                                                    transition: "all 0.3s",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 68, 68, 0.4)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                },
                                                children: "Limpar filtros"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[id]/characters/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[id]/characters/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[id]/characters/page.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/[id]/characters/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                padding: "80px 20px",
                                background: "rgba(0, 0, 0, 0.7)",
                                borderRadius: "15px",
                                backdropFilter: "blur(10px)",
                                border: "2px solid rgba(255, 255, 255, 0.1)"
                            },
                            className: "jsx-7ffbd280658ea1db",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "70px",
                                        height: "70px",
                                        border: "6px solid rgba(255, 255, 255, 0.1)",
                                        borderTop: "6px solid #1e88e5",
                                        borderRadius: "50%",
                                        margin: "0 auto 25px",
                                        animation: "spin 1s linear infinite"
                                    },
                                    className: "jsx-7ffbd280658ea1db"
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "white",
                                        fontSize: "20px",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                                    },
                                    className: "jsx-7ffbd280658ea1db",
                                    children: "Carregando personagens..."
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    id: "7ffbd280658ea1db",
                                    children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
                                }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[id]/characters/page.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : paginatedCharacters.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                padding: "80px 20px",
                                background: "rgba(0, 0, 0, 0.7)",
                                borderRadius: "15px",
                                backdropFilter: "blur(10px)",
                                border: "2px solid rgba(255, 255, 255, 0.1)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "60px",
                                        marginBottom: "20px"
                                    },
                                    children: "😕"
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "white",
                                        fontSize: "22px",
                                        marginBottom: "15px",
                                        fontWeight: "bold"
                                    },
                                    children: "Nenhum personagem encontrado"
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#aaa",
                                        fontSize: "16px",
                                        marginBottom: "30px",
                                        maxWidth: "600px",
                                        margin: "0 auto"
                                    },
                                    children: searchTerm || roleFilter !== "all" ? `Tente ajustar os filtros de busca.` : "Este anime não possui informações de personagens."
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                (searchTerm || roleFilter !== "all") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSearchTerm("");
                                        setRoleFilter("all");
                                        setSortBy("name");
                                    },
                                    style: {
                                        padding: "14px 28px",
                                        background: "linear-gradient(135deg, #1e88e5, #0d47a1)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        transition: "all 0.3s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        margin: "0 auto"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.transform = "scale(1.05)",
                                    onMouseLeave: (e)=>e.currentTarget.style.transform = "scale(1)",
                                    children: "Limpar filtros"
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[id]/characters/page.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                        gap: 25,
                                        marginBottom: "40px"
                                    },
                                    children: paginatedCharacters.map((character)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "rgba(255, 255, 255, 0.08)",
                                                borderRadius: "15px",
                                                padding: "20px",
                                                backdropFilter: "blur(10px)",
                                                border: "2px solid rgba(255, 255, 255, 0.1)",
                                                transition: "all 0.3s ease",
                                                cursor: "pointer",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-8px)";
                                                e.currentTarget.style.borderColor = "#1e88e5";
                                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.4)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: character.character.images.jpg.image_url,
                                                    alt: character.character.name,
                                                    style: {
                                                        width: "100%",
                                                        height: "350px",
                                                        objectFit: "cover",
                                                        borderRadius: "12px",
                                                        marginBottom: "18px",
                                                        border: "3px solid rgba(255, 255, 255, 0.15)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "white",
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                margin: "0 0 12px 0",
                                                                fontSize: "20px",
                                                                fontWeight: "bold",
                                                                lineHeight: "1.4",
                                                                minHeight: "56px",
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: character.character.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "inline-block",
                                                                background: character.role.toLowerCase() === "main" ? "linear-gradient(135deg, #1e88e5, #0d47a1)" : character.role.toLowerCase() === "supporting" ? "linear-gradient(135deg, #43a047, #2e7d32)" : "linear-gradient(135deg, #f4511e, #d84315)",
                                                                color: "white",
                                                                padding: "8px 16px",
                                                                borderRadius: "25px",
                                                                fontSize: "13px",
                                                                fontWeight: "bold",
                                                                marginBottom: "15px",
                                                                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)"
                                                            },
                                                            children: character.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: "15px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        margin: "8px 0",
                                                                        fontSize: "16px",
                                                                        color: "#90caf9",
                                                                        fontWeight: "500"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            style: {
                                                                                color: "#ffffff"
                                                                            },
                                                                            children: "Voz por:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                                                            lineNumber: 532,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " ",
                                                                        character.voice_actors?.[0]?.person?.name || "Não informado"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                character.voice_actors?.[0]?.person?.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        margin: "4px 0 0 0",
                                                                        fontSize: "14px",
                                                                        color: "#aaa",
                                                                        fontStyle: "italic"
                                                                    },
                                                                    children: [
                                                                        "(",
                                                                        character.voice_actors[0].person.language,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, character.character.mal_id, true, {
                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                        flexWrap: "wrap",
                                        marginBottom: "40px",
                                        padding: "25px",
                                        background: "rgba(0, 0, 0, 0.7)",
                                        borderRadius: "15px",
                                        border: "2px solid rgba(255, 255, 255, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePageChange(currentPage - 1),
                                            disabled: currentPage === 1,
                                            style: {
                                                padding: "12px 25px",
                                                background: currentPage === 1 ? "rgba(255, 255, 255, 0.1)" : "linear-gradient(135deg, #1e88e5, #0d47a1)",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "8px",
                                                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                                fontWeight: "bold",
                                                fontSize: "16px",
                                                opacity: currentPage === 1 ? 0.5 : 1,
                                                transition: "all 0.3s"
                                            },
                                            children: "← Anterior"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        Array.from({
                                            length: Math.min(5, totalPages)
                                        }, (_, i)=>{
                                            let pageNum;
                                            if (totalPages <= 5) {
                                                pageNum = i + 1;
                                            } else if (currentPage <= 3) {
                                                pageNum = i + 1;
                                            } else if (currentPage >= totalPages - 2) {
                                                pageNum = totalPages - 4 + i;
                                            } else {
                                                pageNum = currentPage - 2 + i;
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handlePageChange(pageNum),
                                                style: {
                                                    padding: "12px 18px",
                                                    minWidth: "45px",
                                                    background: currentPage === pageNum ? "linear-gradient(135deg, #4ECDC4, #1CE669)" : "rgba(255, 255, 255, 0.1)",
                                                    color: "white",
                                                    border: currentPage === pageNum ? "2px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.3)",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    fontWeight: "bold",
                                                    fontSize: "16px",
                                                    transition: "all 0.3s"
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (currentPage !== pageNum) {
                                                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                                                    }
                                                },
                                                children: pageNum
                                            }, pageNum, false, {
                                                fileName: "[project]/app/[id]/characters/page.tsx",
                                                lineNumber: 598,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePageChange(currentPage + 1),
                                            disabled: currentPage === totalPages,
                                            style: {
                                                padding: "12px 25px",
                                                background: currentPage === totalPages ? "rgba(255, 255, 255, 0.1)" : "linear-gradient(135deg, #FF6B6B, #FF8E53)",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "8px",
                                                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                                fontWeight: "bold",
                                                fontSize: "16px",
                                                opacity: currentPage === totalPages ? 0.5 : 1,
                                                transition: "all 0.3s"
                                            },
                                            children: "Próxima →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                            lineNumber: 628,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#ffffff",
                                                fontSize: "16px",
                                                marginLeft: "20px",
                                                background: "rgba(0, 0, 0, 0.5)",
                                                padding: "10px 20px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.2)"
                                            },
                                            children: [
                                                "Página ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#4ECDC4",
                                                        fontWeight: "bold"
                                                    },
                                                    children: currentPage
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " de ",
                                                totalPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[id]/characters/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[id]/characters/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[id]/characters/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/[id]/characters/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = CharactersPage;
}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = ("TURBOPACK compile-time value", "undefined") !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || ("TURBOPACK compile-time value", "undefined") === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if ("TURBOPACK compile-time truthy", 1) {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
];

//# sourceMappingURL=_0bb82e7a._.js.map