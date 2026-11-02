import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn, t as authClient } from "./client-1vAx-gM_.mjs";
import { t as GROK_PROVIDERS } from "./server-CCejrhji.mjs";
import { i as useCurrentUserState, n as Shell, t as RedirectToSignIn } from "./shell-cbVMAzSL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DS9Ngp52.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { user, isPending } = useCurrentUserState();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-md px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-card bg-panel" })
	}) });
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, { to: "/" });
	async function submit(event) {
		event.preventDefault();
		setBusy(true);
		setError(null);
		try {
			if (mode === "up") {
				const { error: signUpError } = await authClient.signUp.email({
					name: name.trim() || email.split("@")[0] || "Студент",
					email: email.trim(),
					password,
					callbackURL: "/"
				});
				if (signUpError) throw new Error(signUpError.message || "Тіркелу сәтсіз");
			} else {
				const { error: signInError } = await authClient.signIn.email({
					email: email.trim(),
					password,
					callbackURL: "/"
				});
				if (signInError) throw new Error(signInError.message || "Кіру сәтсіз");
			}
			await navigate({ to: "/" });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Қате");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.24em] text-signal",
				children: "ACCESS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-semibold tracking-tight",
				children: mode === "in" ? "Кабинетке кіру" : "Жаңа аккаунт"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "Пошта мен құпия сөз осы сайттың өз базасында сақталады. Google немесе X арқылы да кіруге болады."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-card border border-line bg-panel p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 grid grid-cols-2 rounded-full bg-ink p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("in"),
						className: mode === "in" ? "h-10 rounded-full bg-signal font-semibold text-signal-ink" : "h-10 rounded-full text-muted",
						children: "Кіру"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("up"),
						className: mode === "up" ? "h-10 rounded-full bg-signal font-semibold text-signal-ink" : "h-10 rounded-full text-muted",
						children: "Тіркелу"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Аты-жөні"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-4 text-fg outline-none focus:border-signal",
								autoComplete: "name"
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Электрондық пошта"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-4 text-fg outline-none focus:border-signal",
								autoComplete: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Құпия сөз"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								minLength: 8,
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "mt-1 h-12 w-full rounded-xl border border-line bg-ink px-4 text-fg outline-none focus:border-signal",
								autoComplete: mode === "up" ? "new-password" : "current-password"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-gold",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: busy,
							className: "h-12 w-full rounded-full bg-signal font-semibold text-signal-ink disabled:opacity-60",
							children: busy ? "Күтіңіз…" : mode === "in" ? "Кіру" : "Тіркелу"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" }),
						"немесе",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => signIn(provider.providerId, { callbackURL: "/" }),
						className: "h-12 w-full rounded-full border border-line font-medium text-fg hover:border-signal",
						children: [provider.label, " арқылы жалғастыру"]
					}, provider.providerId))
				})
			]
		})]
	}) });
}
//#endregion
export { LoginPage as component };
