(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/OnboardingForm/OnboardingForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "OnboardingForm-module__b_ayhW__arrow",
  "avatar": "OnboardingForm-module__b_ayhW__avatar",
  "avatarImage": "OnboardingForm-module__b_ayhW__avatarImage",
  "dropdown": "OnboardingForm-module__b_ayhW__dropdown",
  "dropdownItem": "OnboardingForm-module__b_ayhW__dropdownItem",
  "dropdownMenu": "OnboardingForm-module__b_ayhW__dropdownMenu",
  "dropdownTrigger": "OnboardingForm-module__b_ayhW__dropdownTrigger",
  "error": "OnboardingForm-module__b_ayhW__error",
  "fieldGroup": "OnboardingForm-module__b_ayhW__fieldGroup",
  "fields": "OnboardingForm-module__b_ayhW__fields",
  "filled": "OnboardingForm-module__b_ayhW__filled",
  "form": "OnboardingForm-module__b_ayhW__form",
  "input": "OnboardingForm-module__b_ayhW__input",
  "label": "OnboardingForm-module__b_ayhW__label",
  "placeholder": "OnboardingForm-module__b_ayhW__placeholder",
  "submitButton": "OnboardingForm-module__b_ayhW__submitButton",
  "submitWrapper": "OnboardingForm-module__b_ayhW__submitWrapper",
  "uploadButton": "OnboardingForm-module__b_ayhW__uploadButton",
});
}),
"[project]/lib/validation/onboarding.schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onboardingSchema",
    ()=>onboardingSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const onboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Імʼя обовʼязкове'),
    birthDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"]().required('Дата народження обовʼязкова'),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Стать обовʼязкова'),
    avatar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixed"]().required('Аватар обовʼязковий')
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/onboarding.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OnboardingForm/OnboardingForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OnboardingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/OnboardingForm/OnboardingForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2f$onboarding$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation/onboarding.schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/onboarding.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function AvatarPreview({ defaultAvatar, setPreview }) {
    _s();
    const { values } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormikContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarPreview.useEffect": ()=>{
            if (values.avatar) {
                const url = URL.createObjectURL(values.avatar);
                setPreview(url);
                return ({
                    "AvatarPreview.useEffect": ()=>URL.revokeObjectURL(url)
                })["AvatarPreview.useEffect"];
            }
            setPreview(defaultAvatar);
        }
    }["AvatarPreview.useEffect"], [
        values.avatar,
        defaultAvatar,
        setPreview
    ]);
    return null;
}
_s(AvatarPreview, "+0CdlmE2q0/21AzwNQvXpefHDEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormikContext"]
    ];
});
_c = AvatarPreview;
function GenderDropdown({ value, setFieldValue }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const options = [
        {
            value: 'male',
            label: 'Хлопчик'
        },
        {
            value: 'female',
            label: 'Дівчинка'
        },
        {
            value: 'unknown',
            label: 'Ще не знаю'
        }
    ];
    const selected = options.find((o)=>o.value === value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GenderDropdown.useEffect": ()=>{
            const handler = {
                "GenderDropdown.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["GenderDropdown.useEffect.handler"];
            document.addEventListener('mousedown', handler);
            return ({
                "GenderDropdown.useEffect": ()=>document.removeEventListener('mousedown', handler)
            })["GenderDropdown.useEffect"];
        }
    }["GenderDropdown.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownTrigger} ${value ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filled : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholder}`,
                onClick: ()=>setOpen((prev)=>!prev),
                children: [
                    selected ? selected.label : 'Оберіть стать',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 10l5 5 5-5z"
                        }, void 0, false, {
                            fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownMenu,
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                        onClick: ()=>{
                            setFieldValue('gender', option.value);
                            setOpen(false);
                        },
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s1(GenderDropdown, "wl9VvfhnMVWQ+kCekFjcRPEi3/0=");
_c1 = GenderDropdown;
function OnboardingForm() {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const defaultAvatar = '/images/avatar-image.svg';
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultAvatar);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "OnboardingForm.useMutation[mutation]": (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$onboarding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitOnboarding"])(formData)
        }["OnboardingForm.useMutation[mutation]"],
        onSuccess: {
            "OnboardingForm.useMutation[mutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Форма успішно надіслана!');
                router.push('/');
            }
        }["OnboardingForm.useMutation[mutation]"],
        onError: {
            "OnboardingForm.useMutation[mutation]": (err)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err.message || 'Помилка при відправці')
        }["OnboardingForm.useMutation[mutation]"]
    });
    const handleDateChange = (e, setFieldValue)=>{
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 2 && val.length <= 4) val = val.slice(0, 2) + '.' + val.slice(2);
        if (val.length > 4) val = val.slice(0, 5) + '.' + val.slice(5, 9);
        setFieldValue('birthDate', val);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
        initialValues: {
            name: '',
            birthDate: '',
            gender: '',
            avatar: null
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2f$onboarding$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onboardingSchema"],
        onSubmit: (values)=>{
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('birthDate', values.birthDate);
            formData.append('gender', values.gender);
            if (values.avatar) formData.append('avatar', values.avatar);
            mutation.mutate(formData);
        },
        children: ({ setFieldValue, values })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPreview, {
                                defaultAvatar: defaultAvatar,
                                setPreview: setPreview
                            }, void 0, false, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: preview,
                                        alt: "Avatar",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarImage
                                    }, void 0, false, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadLabel,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadButton,
                                                children: "Завантажити фото"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                hidden: true,
                                                onChange: (e)=>setFieldValue('avatar', e.currentTarget.files?.[0] || null)
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fields,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Стать дитини"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GenderDropdown, {
                                                value: values.gender,
                                                setFieldValue: setFieldValue
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                                name: "gender",
                                                component: "div",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Планова дата пологів"
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                type: "text",
                                                name: "birthDate",
                                                placeholder: "16.07.2025",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                maxLength: 10,
                                                onChange: (e)=>handleDateChange(e, setFieldValue)
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                                                name: "birthDate",
                                                component: "div",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
                                            }, void 0, false, {
                                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: mutation.isPending,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            onClick: ()=>document.querySelector('form')?.requestSubmit(),
                            children: mutation.isPending ? 'Відправка…' : 'Зберегти'
                        }, void 0, false, {
                            fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/OnboardingForm/OnboardingForm.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s2(OnboardingForm, "O6CzuON7Xpgn7KibUe+S4wf/xas=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c2 = OnboardingForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AvatarPreview");
__turbopack_context__.k.register(_c1, "GenderDropdown");
__turbopack_context__.k.register(_c2, "OnboardingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(private)/profile/edit/OnboardingPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "OnboardingPage-module__fPKOnq__container",
  "formSide": "OnboardingPage-module__fPKOnq__formSide",
  "image": "OnboardingPage-module__fPKOnq__image",
  "imageSide": "OnboardingPage-module__fPKOnq__imageSide",
  "imageWrapper": "OnboardingPage-module__fPKOnq__imageWrapper",
  "page": "OnboardingPage-module__fPKOnq__page",
  "title": "OnboardingPage-module__fPKOnq__title",
  "wrapper": "OnboardingPage-module__fPKOnq__wrapper",
});
}),
"[project]/app/(private)/profile/edit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OnboardingForm/OnboardingForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(private)/profile/edit/OnboardingPage.module.css [app-client] (css module)");
'use client';
;
;
;
function EditProfilePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSide,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Давайте познайомимось ближче"
                            }, void 0, false, {
                                fileName: "[project]/app/(private)/profile/edit/page.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OnboardingForm$2f$OnboardingForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(private)/profile/edit/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(private)/profile/edit/page.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(private)/profile/edit/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(private)/profile/edit/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageSide,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/onboarding-image.jpg",
                        alt: "Onboarding",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private$292f$profile$2f$edit$2f$OnboardingPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                    }, void 0, false, {
                        fileName: "[project]/app/(private)/profile/edit/page.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(private)/profile/edit/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(private)/profile/edit/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(private)/profile/edit/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = EditProfilePage;
var _c;
__turbopack_context__.k.register(_c, "EditProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f55f6c75._.js.map