export default function ShowCardsButton({

    showAllCards,
    setShowAllCards

}) {

    return (

        <button

            onClick={() =>

                setShowAllCards(

                    prev => !prev

                )

            }

            className="
            bg-blue-600
            hover:bg-blue-700
            px-4
            py-2
            rounded
            ml-2
            mb-4
            "

        >

            {

                showAllCards

                ? 'Hide Opponent Cards'

                : 'Show Opponent Cards'

            }

        </button>

    );

}