import itemData from '../data/items.json'
import '../styles/ItemComp.css'


function ItemComp({godownId} : {godownId : string}) {
    const items = itemData.filter((item) => item.godown_id == godownId)
    return (
        <div>
            {items.map((val, idx) => (
                <div key={idx} className='godown-item'>{val.name}</div>
            ))}
        </div>
    )
}

export default ItemComp