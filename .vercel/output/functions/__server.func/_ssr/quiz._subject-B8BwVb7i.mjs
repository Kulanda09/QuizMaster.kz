import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getSubject } from "./catalog-CNe7wnVA.mjs";
import { i as useCurrentUserState, n as Shell, t as RedirectToSignIn } from "./shell-cbVMAzSL.mjs";
import { n as saveAttempt } from "./attempts--rMsDux2.mjs";
import { n as Route$1 } from "./router--Mf4qrQ5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz._subject-B8BwVb7i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizPage() {
	const { subject: subjectId } = Route$1.useParams();
	const subject = getSubject(subjectId);
	const { user, isPending } = useCurrentUserState();
	const navigate = useNavigate();
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [saveError, setSaveError] = (0, import_react.useState)(null);
	if (!subject) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-lg px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold",
			children: "Пән табылмады"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-6 inline-flex h-11 items-center text-signal",
			children: "Басты бетке"
		})]
	}) });
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 animate-pulse rounded-card bg-panel" })
	}) });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	const question = subject.questions[index];
	const total = subject.questions.length;
	const progress = done ? 100 : Math.round(index / total * 100);
	async function finish(finalScore) {
		setDone(true);
		setSaving(true);
		setSaveError(null);
		try {
			await saveAttempt({ data: {
				subject: subject.id,
				score: finalScore,
				total
			} });
		} catch (err) {
			setSaveError(err instanceof Error ? err.message : "Сақталмады");
		} finally {
			setSaving(false);
		}
	}
	function confirm() {
		if (picked === null || !question) return;
		const nextScore = score + (picked === question.correct ? 1 : 0);
		if (index + 1 >= total) {
			setScore(nextScore);
			finish(nextScore);
			return;
		}
		setScore(nextScore);
		setIndex((n) => n + 1);
		setPicked(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-[0.22em] text-signal",
					children: subject.code
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: subject.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-sm text-muted",
					children: [
						done ? total : index + 1,
						"/",
						total
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 h-1.5 overflow-hidden rounded-full bg-panel-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-signal transition-[width] duration-300",
					style: { width: `${progress}%` }
				})
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-line bg-panel p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.2em] text-gold",
						children: "НӘТИЖЕ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-5xl font-semibold tracking-tight",
						children: [score, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl text-muted",
							children: ["/", total]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: saving ? "Нәтиже кабинетке жазылуда…" : saveError ? saveError : "Нәтиже жеке кабинетке сақталды."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setIndex(0);
								setPicked(null);
								setScore(0);
								setDone(false);
							},
							className: "h-11 rounded-full bg-signal px-5 font-semibold text-signal-ink",
							children: "Қайта өту"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ to: "/cabinet" }),
							className: "h-11 rounded-full border border-line px-5 font-semibold",
							children: "Кабинет"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-line bg-panel p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold leading-snug sm:text-2xl",
						children: question.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: question.options.map((option, optionIndex) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setPicked(optionIndex),
								className: picked === optionIndex ? "min-h-12 rounded-2xl border border-signal bg-signal/10 px-4 py-3 text-left font-medium text-fg" : "min-h-12 rounded-2xl border border-line bg-ink px-4 py-3 text-left font-medium text-fg hover:border-signal/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-3 font-mono text-xs text-signal",
									children: String.fromCharCode(65 + optionIndex)
								}), option]
							}, option);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: picked === null,
						onClick: confirm,
						className: "mt-6 h-12 w-full rounded-full bg-signal font-semibold text-signal-ink disabled:opacity-40",
						children: index + 1 === total ? "Аяқтау" : "Келесі"
					})
				]
			})
		]
	}) });
}
//#endregion
export { QuizPage as component };
