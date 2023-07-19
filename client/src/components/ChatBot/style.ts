
const borderColor = '#E0E0E0'

export const style = {
    chatBot: {position: 'absolute', right: 0, bottom: 0, overflow: 'hidden', width: {xs: '100%', md: 400}, zIndex: 1000},
    chatBotContainer: {p: 1, border: `2px solid ${borderColor}`,borderTop: 'none', width: '95%', bgColor: 'white'},
    messagesContainer: {height: 300, overflowX: 'hidden', overflowY: 'scroll', px: 1},
    singleMessageMainContainer: { border: `1px solid ${borderColor}`, borderRadius: '12px',justifyContent: 'space-between', alignItems:'center'},
    singleMessageSecondaryContainer: {width: '95%',alignItems:"center"}
}
