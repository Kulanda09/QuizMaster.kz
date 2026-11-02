import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SUBJECTS } from "./catalog-CNe7wnVA.mjs";
import { i as useCurrentUserState, n as Shell, t as RedirectToSignIn } from "./shell-cbVMAzSL.mjs";
import { t as listAttempts } from "./attempts--rMsDux2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cabinet-Da_0Semf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TITLES = Object.fromEntries(SUBJECTS.map((s) => [s.id, s.title]));
function CabinetPage() {
	const { user, isPending } = useCurrentUserState();
	const [rows, setRows] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		let cancelled = false;
		listAttempts().then((data) => {
			if (!cancelled) setRows(data);
		}).catch((err) => {
			if (!cancelled) setError(err instanceof Error ? err.message : "Жүктелмеді");
		});
		return () => {
			cancelled = true;
		};
	}, [user?.id]);
	if (isPending || user && rows === null && !error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-card bg-panel" })
	}) });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.22em] text-signal",
				children: "CABINET"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: user.displayName ?? user.primaryEmail ?? "Студент"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Соңғы тест әрекеттері осы аккаунтқа байланған."
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-gold",
				children: error
			}) : null,
			!error && rows && rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-card border border-dashed border-line p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Әлі нәтиже жоқ. Бір пәннен бастаңыз."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-4 inline-flex h-11 items-center font-semibold text-signal",
					children: "Пәндерге өту"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-line overflow-hidden rounded-card border border-line bg-panel",
				children: rows?.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-4 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: TITLES[row.subject] ?? row.subject
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: new Date(row.created_at).toLocaleString("kk-KZ")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-lg text-signal",
						children: [
							row.score,
							"/",
							row.total
						]
					})]
				}, row.id))
			})
		]
	}) });
}
//#endregion
export { CabinetPage as component };
