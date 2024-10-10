import itemData from '../data/items.json'
import '../styles/ItemComp.css'
import obj from '../assets/object.png'
import ItemView from './ItemView'
import React from 'react';

function ItemComp({godownId, curr, setCurr} : {godownId : string, curr: string , setCurr: React.Dispatch<string>}) {
    const items = itemData.filter((item) => item.godown_id == godownId);
    return (
        <div>
            {items.map((val, idx) => (
                <div>
                    <div key={idx} className='godown-item' onClick={() => setCurr(val.item_id)}>
                        <img src={obj} className='godown-item-img'/>
                        <span className='godown-item-name'>{val.name}</span>
                    </div>
                    <ItemView itemId={val.item_id} onClose={() => setCurr('')} shown={val.item_id == curr}/>
                </div>
            ))}
        </div>
    )
}

export default ItemComp