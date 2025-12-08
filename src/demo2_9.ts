// 在字符串左边加指定数量空格的方法
export default function padLeft(value: string, padding: string | number): string {
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding === "string"){
        return padding + value;
    }

    else{
        return padding;
    }

}

