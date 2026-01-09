module.exports = [
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
"[project]/components/OnboardingForm/OnboardingForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "OnboardingForm-module__b_ayhW__avatar",
  "error": "OnboardingForm-module__b_ayhW__error",
  "form": "OnboardingForm-module__b_ayhW__form",
  "formSide": "OnboardingForm-module__b_ayhW__formSide",
  "formUser": "OnboardingForm-module__b_ayhW__formUser",
  "image": "OnboardingForm-module__b_ayhW__image",
  "imageSide": "OnboardingForm-module__b_ayhW__imageSide",
  "imageWrapper": "OnboardingForm-module__b_ayhW__imageWrapper",
  "page": "OnboardingForm-module__b_ayhW__page",
  "submitButton": "OnboardingForm-module__b_ayhW__submitButton",
  "title": "OnboardingForm-module__b_ayhW__title",
  "uploadButton": "OnboardingForm-module__b_ayhW__uploadButton",
});
}),
"[project]/lib/validation/onboarding.schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onboardingSchema",
    ()=>onboardingSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
;
const onboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Імʼя обовʼязкове'),
    birthDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["date"]().required('Дата народження обовʼязкова'),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Стать обовʼязкова'),
    avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mixed"]().required('Аватар обовʼязковий')
});
}),
"[project]/lib/api/onboarding.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitOnboarding",
    ()=>submitOnboarding
]);
async function submitOnboarding(data) {
    const res = await fetch('/api/onboarding', {
        method: 'POST',
        body: data
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Помилка запиту');
    }
    return res.json();
}
}),
"[project]/components/OnboardingForm/OnboardingForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/OnboardingForm/OnboardingForm.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2f$onboarding$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation/onboarding.schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/onboarding.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function OnboardingForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const defaultAvatar = '/images/avatar-image.svg';
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultAvatar);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitOnboarding"])(formData),
        onSuccess: ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Форма успішно надіслана!');
            router.push('/');
        },
        onError: (err)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(err.message || 'Помилка при відправці')
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Formik"], {
        initialValues: {
            name: '',
            birthDate: '',
            gender: '',
            avatar: null
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2f$onboarding$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onboardingSchema"],
        onSubmit: (values)=>{
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('birthDate', values.birthDate);
            formData.append('gender', values.gender);
            if (values.avatar) formData.append('avatar', values.avatar);
            mutation.mutate(formData);
        },
        children: ({ setFieldValue, values })=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
                if (values.avatar) {
                    const objectUrl = URL.createObjectURL(values.avatar);
                    setPreview(objectUrl);
                    return ()=>URL.revokeObjectURL(objectUrl);
                } else {
                    setPreview(defaultAvatar);
                }
            }, [
                values.avatar
            ]);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSide,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                        children: "Давайте познайомимось ближче"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 62,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OnboardingForm, {}, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 63,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 61,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageSide,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/onboarding-image.jpg",
                                        alt: "Onboarding",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 68,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                    lineNumber: 67,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 66,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: preview,
                                alt: "Avatar preview",
                                width: 164,
                                height: 164,
                                style: {
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: 16
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "avatar-upload",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadButton,
                                    children: "Завантажити фото"
                                }, void 0, false, {
                                    fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "avatar-upload",
                                type: "file",
                                accept: "image/*",
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>setFieldValue('avatar', e.currentTarget.files?.[0] || null)
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                name: "avatar",
                                component: "div",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formUser,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Імʼя"
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                name: "name",
                                placeholder: "Імʼя"
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                name: "name",
                                component: "div",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Дата народження"
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                name: "birthDate",
                                type: "date"
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                name: "birthDate",
                                component: "div",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Стать"
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                name: "gender",
                                as: "select",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Оберіть стать"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "male",
                                        children: "Хлопчик"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "female",
                                        children: "Дівчинка"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "unknown",
                                        children: "Ще не знаю"
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                name: "gender",
                                component: "div",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: mutation.isPending,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                children: mutation.isPending ? 'Відправка...' : 'Зберегти'
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                lineNumber: 59,
                columnNumber: 11
            }, this);
        }
    }, void 0, false, {
        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(private)/profile/edit/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OnboardingForm/OnboardingForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function EditProfilePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/(private)/profile/edit/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a21f85e7._.js.map