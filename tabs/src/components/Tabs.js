import React from 'react';

const Tabs = props => {
    const { tab_list } = props;




    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                tab_list.map((item, i) => {
                    return (
                        <div key={i} style={{width: '300px', border: '1px solid black', margin: '4px', padding: '4px'}}>
                            {item.tab_name}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Tabs;