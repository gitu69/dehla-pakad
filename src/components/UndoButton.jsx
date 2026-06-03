export default function UndoButton({

    undoMove

}) {

    return (

        <div
        className="
        flex
        justify-center
        mb-4
        "
        >

            <button

                onClick={undoMove}

                className="
                bg-red-600
                px-4
                py-2
                rounded
                "

            >

                Undo Move

            </button>

        </div>
    );
}