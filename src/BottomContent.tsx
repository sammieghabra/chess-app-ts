
type BottomContentProps = {
    width: number
    onReset: () => void
    onSwitchSides: () => void
}

export default function BottomContent({width, onReset, onSwitchSides}: BottomContentProps) {
    return(
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    float: 'right',
                    alignItems: 'right',
                    textAlign: 'right',
                    width: '50%'
                }}>
                    <button style={{
                        padding: '5px',
                        marginRight: '10px'
                    }} onClick={onReset}>
                        reset
                    </button>
                </div>
                <div style={{
                    float: 'left',
                    width: '50%'
                }}>
                    <button style={{
                        padding: '5px',
                        marginLeft: '10px'
                    }} onClick={onSwitchSides}>
                        flip side
                    </button>
                </div>
            </div>
        </div>
    );
}
