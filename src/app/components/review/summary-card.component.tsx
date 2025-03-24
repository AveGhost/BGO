import Rating from "./rating.component"

const SummaryCard = ({rate}: {rate: number}) => {
    return (
        <article className="py-4 px-8 bg-zinc-900 rounded-lg grid grid-cols-[1fr_250px] items-center my-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-sm">Assassin&#39;s Creed: Shadows</h2>
                <h3 className="text-3xl font-medium">Nie jest to Ghost of Tsushima, ale nie jest to też jedna wielka tragedia</h3>
                <p className="text-zinc-300 text-sm">Shadows raczej spodoba się wielu fanom serii. Nie wszystkim. Ale tych z zewnątrz prawdopodobnie niczym za bardzo nie zadowoli.</p>
            </div>
            <Rating rate={rate} classes="w-30 h-30 text-5xl border-4" />
        </article>
    )
}

export default SummaryCard