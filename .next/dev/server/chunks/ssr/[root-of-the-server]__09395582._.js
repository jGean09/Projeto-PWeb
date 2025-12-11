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
"[project]/pages/[id]/characters.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
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
const CharactersPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [characters, setCharacters] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [filteredCharacters, setFilteredCharacters] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("all");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let results = characters;
        if (searchTerm.trim() !== "") {
            const term = searchTerm.toLowerCase();
            results = results.filter((character)=>character.character.name.toLowerCase().includes(term) || character.role.toLowerCase().includes(term) || character.voice_actors?.some((va)=>va.person.name.toLowerCase().includes(term)));
        }
        if (roleFilter !== "all") {
            results = results.filter((character)=>character.role.toLowerCase() === roleFilter.toLowerCase());
        }
        setFilteredCharacters(results);
    }, [
        searchTerm,
        roleFilter,
        characters
    ]);
    const uniqueRoles = Array.from(new Set(characters.map((c)=>c.role.toLowerCase()))).sort();
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
                            children: "Personagens"
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/characters.tsx",
                            lineNumber: 84,
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
                                    fontWeight: "bold"
                                },
                                children: "↩ Voltar ao Anime"
                            }, void 0, false, {
                                fileName: "[project]/pages/[id]/characters.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/characters.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/[id]/characters.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(0, 0, 0, 0.6)",
                        padding: "20px",
                        borderRadius: "10px",
                        marginBottom: "30px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "15px",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar por nome, papel ou dublador...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        style: {
                                            padding: "12px 15px",
                                            borderRadius: "8px",
                                            border: "1px solid #555",
                                            background: "rgba(0, 0, 0, 0.7)",
                                            color: "white",
                                            flex: "1",
                                            minWidth: "250px",
                                            outline: "none",
                                            fontSize: "14px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/pages/[id]/characters.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        value: roleFilter,
                                        onChange: (e)=>setRoleFilter(e.target.value),
                                        style: {
                                            padding: "12px 15px",
                                            borderRadius: "8px",
                                            border: "1px solid #555",
                                            background: "rgba(0, 0, 0, 0.7)",
                                            color: "white",
                                            minWidth: "150px",
                                            outline: "none",
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "Todos os papéis"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/[id]/characters.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            uniqueRoles.map((role, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: role,
                                                    children: role.charAt(0).toUpperCase() + role.slice(1)
                                                }, index, false, {
                                                    fileName: "[project]/pages/[id]/characters.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/[id]/characters.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/[id]/characters.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    color: "white",
                                    fontSize: "14px",
                                    flexWrap: "wrap",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#aaa"
                                                },
                                                children: [
                                                    filteredCharacters.length,
                                                    " personagem",
                                                    filteredCharacters.length !== 1 ? 's' : '',
                                                    " encontrado",
                                                    filteredCharacters.length !== 1 ? 's' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/[id]/characters.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    marginLeft: "10px",
                                                    color: "#90caf9"
                                                },
                                                children: [
                                                    'para "',
                                                    searchTerm,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/[id]/characters.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            roleFilter !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    marginLeft: "10px",
                                                    color: "#81c784"
                                                },
                                                children: [
                                                    "• Papel: ",
                                                    roleFilter
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/[id]/characters.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/[id]/characters.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchTerm(""),
                                        style: {
                                            padding: "5px 12px",
                                            background: "#555",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            fontSize: "12px"
                                        },
                                        children: "Limpar busca"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/[id]/characters.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/[id]/characters.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/[id]/characters.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/characters.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    style: {
                        color: "white",
                        textAlign: "center",
                        fontSize: "18px"
                    },
                    children: "Carregando personagens..."
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/characters.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredCharacters.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "40px",
                        background: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                color: "white",
                                fontSize: "18px"
                            },
                            children: searchTerm || roleFilter !== "all" ? `Nenhum personagem encontrado para "${searchTerm}"${roleFilter !== "all" ? ` com papel "${roleFilter}"` : ''}` : "Nenhum personagem encontrado."
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/characters.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (searchTerm || roleFilter !== "all") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchTerm("");
                                setRoleFilter("all");
                            },
                            style: {
                                marginTop: "15px",
                                padding: "8px 20px",
                                background: "#1e88e5",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            },
                            children: "Limpar filtros"
                        }, void 0, false, {
                            fileName: "[project]/pages/[id]/characters.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/[id]/characters.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: 20,
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: 20,
                        borderRadius: 10
                    },
                    children: filteredCharacters.map((character)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: 8,
                                padding: 15,
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                transition: "all 0.3s"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.borderColor = "#1e88e5";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: character.character.images.jpg.image_url,
                                    alt: character.character.name,
                                    style: {
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                        borderRadius: 5,
                                        marginBottom: "10px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/pages/[id]/characters.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: "white"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: "0 0 5px 0",
                                                fontSize: "16px"
                                            },
                                            children: character.character.name
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/characters.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-block",
                                                background: character.role.toLowerCase() === "main" ? "#1e88e5" : character.role.toLowerCase() === "supporting" ? "#43a047" : "#f4511e",
                                                color: "white",
                                                padding: "3px 8px",
                                                borderRadius: "12px",
                                                fontSize: "11px",
                                                fontWeight: "bold",
                                                marginBottom: "8px"
                                            },
                                            children: character.role
                                        }, void 0, false, {
                                            fileName: "[project]/pages/[id]/characters.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: "5px 0",
                                                fontSize: "14px",
                                                color: "#aaa"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: "Voz por:"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/[id]/characters.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                character.voice_actors?.[0]?.person?.name || "Não informado"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/characters.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        character.voice_actors?.[0]?.person?.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: "0",
                                                fontSize: "12px",
                                                color: "#777"
                                            },
                                            children: [
                                                "(",
                                                character.voice_actors[0].person.language,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/[id]/characters.tsx",
                                            lineNumber: 291,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/[id]/characters.tsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, character.character.mal_id, true, {
                            fileName: "[project]/pages/[id]/characters.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/pages/[id]/characters.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/[id]/characters.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/[id]/characters.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CharactersPage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09395582._.js.map