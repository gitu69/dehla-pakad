export default function UndoButton({

    undoMove

}) {

    return (

        <button

            onClick={undoMove}

            className="
            bg-slate-900/70
            backdrop-blur-md

            border
            border-slate-700

            hover:bg-slate-800

            rounded-xl

            px-4
            py-2

            text-sm
            font-semibold

            transition-all
            duration-200

            shadow-lg
            "

        >

            ↶ Undo

        </button>

    );

}