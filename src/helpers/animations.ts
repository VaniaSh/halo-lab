export const PostAnim = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.6}
    })
}
export const TextAnim = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: .6},


    }
}