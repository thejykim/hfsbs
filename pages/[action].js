import { useRouter } from 'next/router';
import Thread from '../components/thread';

const Action = () => {
    const router = useRouter();
    const { action, tid } = router.query;

    if (action == null | tid == null) {
        return <p>Whoops! Looks like your link is broken.</p>;
    } else {
        return <Thread action={action} tid={tid} />;
    }
}

export default Action;