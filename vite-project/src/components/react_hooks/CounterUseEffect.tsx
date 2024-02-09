import { useEffect, useState } from "react";

export const CounterUseEffect = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    /**
     * 第二引数に設定したcountのstateが更新されたときだけuseEffectが実行される
     * textが更新された時は、useEffect内の処理は動かない
     * 第二引数を空配列にした場合は、初回リロード時のみに実行
     * 初回API実行時とかに使う
     * 何回も呼び出すAPIの場合はuseSWRを使った方がいい
     */
    useEffect(() => {
        console.count('useEffect');
    }, [count]);

    console.count('レンダリング');

    /**
     * レンダリングがいつ起きるのか？
     * リロード時
     * ステートが更新された時
     * useEffectはレンダリングの後に実行される
     */
    return (
        <>
            <div>
                <p>カウント: {count}</p>
                <button
                    onClick={() => setCount(count + 1)}
                >➕</button>
            </div>
            <div>
                <p>{text}</p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </>
    )
}