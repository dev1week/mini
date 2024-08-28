import styles from './FullScreenMessage.modules.scss'
import classNames  from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps{
    type: 'loading'|'error'
}

function FullScreenMessage({type}: FullScreenMessageProps){
    return <div className={cx('container')}>
        메시지입니다. 
    </div>
}

export default FullScreenMessage