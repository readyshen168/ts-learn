// 在字符串左边加指定数量空格的方法
export default function padLeft(value: string, padding: string | number): string {
    if(typeof padding === "number"){
        const n = Math.max(0, Math.floor(padding));
        return " ".repeat(n) + value;
    }

    if(typeof padding === "string"){
        return padding + value;
    }

    else{
        return padding;
    }

}

