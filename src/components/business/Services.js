import React from 'react'
import Computer from '../../assets/images/computer-search-icon.png';
import Card from '../Card';

const CARDDATA = [
    {
        image: Computer,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean nec enim nec est aliquet pellentesque id id est.
                Curabitur hendrerit quam sapien, quis luctus massa lacinia at.
                Cras ut metus at ex varius pulvinar.
        `,
        name: 'Title'
    },
    {
        image: Computer,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean nec enim nec est aliquet pellentesque id id est.
                Curabitur hendrerit quam sapien, quis luctus massa lacinia at.
                Cras ut metus at ex varius pulvinar.
        `,
        name: 'Title'

    },
    {
        image: Computer,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean nec enim nec est aliquet pellentesque id id est.
                Curabitur hendrerit quam sapien, quis luctus massa lacinia at.
                Cras ut metus at ex varius pulvinar.
        `,
        name: 'Title'
    }
]

export function ServicePage({
        selectItem
    }) {        
    return (
        <section className='service-page' id="services">
            <div className='services'>
                {
                    CARDDATA.map((item, index) => (
                        <Card  
                            key={index}
                            image={item.image} 
                            name={item.name}
                            selectItem={selectItem}
                            details = {item.details}
                        />
                    ))
                }
            </div> 
        </section>
    )
}

