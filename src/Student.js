const Students = (props) => {

    const list = ["Siva", "Sridhar", "Sanjay", "Santhosh", "Nataraj"]

    const item = props.item
    const setitem = props.setitem

    const addToFavorites = (index) => {
        setitem([...item, list[index]])
    };

    return (
        <div className="p-5">
            <div className="flex flex-col gap-8 lg:w-1/4">
                {list.map((student, index) => (
                    <p key={index} className="flex flex-row gap-3 text-xl justify-between">
                        {index+1}.{student}{" "}
                        {!item.includes(student) && (
                            <button onClick={() => addToFavorites(index)} className="bg-blue-500 p-2">
                                Add Favourite
                            </button>
                        )}
                        {item.includes(student) && (
                            <span className="bg-blue-500 p-2">Added</span>
                        )}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Students