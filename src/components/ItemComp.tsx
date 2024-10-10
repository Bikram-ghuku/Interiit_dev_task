import itemData from '../data/items.json'
import '../styles/ItemComp.css'
import obj from '../assets/object.png'

function ItemComp({godownId} : {godownId : string}) {
    const items = itemData.filter((item) => item.godown_id == godownId)
    return (
        <div>
            {items.map((val, idx) => (
                <div key={idx} className='godown-item'>
                    <img src={obj} className='godown-item-img'/>
                    <span className='godown-item-name'>{val.name}</span>
                </div>
            ))}
        </div>
    )
}

export default ItemComp