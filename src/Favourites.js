const Favourites = (props) => {

    const item = props.item
    const setitem = props.setitem

    const Remove = (index) => {

        const newItems = item.filter((item, i) => i !== index);
        setitem(newItems);
    }

    return (
        <div className="p-5">
            <div className="flex flex-col gap-8 lg:w-1/4">
                {item.map((item, index) => (
                    <p key={index} className="flex flex-row gap-3 text-xl justify-between">
                        {index+1}.{item}
                        {item.includes(item) && (
                            <button onClick={() => { Remove(index) }} className="bg-blue-500 p-2">Remove</button>
                        )}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Favourites