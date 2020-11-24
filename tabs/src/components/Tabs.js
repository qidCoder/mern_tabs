import React, {useState} from 'react';

const Tabs = props => {
    const { tab_list } = props;
    const [selectedIdx, setSelectedIdx] = useState(0);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                tab_list.map((item, i) => {
                    return (
                        <div key={i} style={{width: '300px', border: '1px solid black', margin: '4px', padding: '4px'}} onClick={e =>{setSelectedIdx(i)}}>
                            {item.tab_name}
                        </div>
                    )
                })
            }

            <div style={{width: '1000px', border: '1px solid black', margin: '4px', padding: '4px'}}>
                {tab_list[selectedIdx].tab_content}
            </div>
        </div>

    )
}

export default Tabs;