
export default function WhatIDo(props:any) 
{
    const styles = props.styles;
    const title = props.title;
    const content = props.content;
    
    return (
        <div>
            <div className={styles.ido}>
                <h3 className={styles.ido_title}>{title}</h3>
                <p className={styles.ido_content}>{content.slice(0,220)+'...'}</p>
            </div>
        </div>
    )
}
