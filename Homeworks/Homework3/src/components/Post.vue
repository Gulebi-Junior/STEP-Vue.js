<script>
export default {
    name: "Post",
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {
        changeBlock(post) {
            this.$emit("clicked", post);
        },
        addBlock(post) {
            post.blocks.push({
                id: post.blocks.at(-1)?.id + 1 || 1,
                title: "Text",
                textColor: "#000000",
                backgroundColor: "#ffffff",
                font: "Arial",
                fontSize: 16,
                isBold: false,
                isItalic: false,
                isUnderline: false,
            });
            this.$emit("clicked", post);
        },
        deleteBlock(post, deletedBlock) {
            post.blocks = post.blocks.filter((block) => block.id != deletedBlock.id);
            this.$emit("clicked", post);
        },
    },
};
</script>

<template>
    <div class="post">
        <div class="post-blocks-block">
            <div v-for="block in post.blocks" :key="block.id" class="post-block">
                <textarea
                    v-model="block.title"
                    :style="{
                        background: block.backgroundColor,
                        color: block.textColor,
                        fontFamily: block.font,
                        fontSize: block.fontSize + 'px',
                        fontWeight: block.isBold ? 'bold' : 'normal',
                        fontStyle: block.isItalic ? 'italic' : 'normal',
                        textDecoration: block.isUnderline ? 'underline' : 'none',
                    }"
                ></textarea>
                <div class="post-block-controls">
                    <div class="post-block-controls-item">
                        <label for="text-color-input">Text Color</label>
                        <input type="color" class="input" id="text-color-input" v-model="block.textColor" />
                    </div>
                    <div class="post-block-controls-item">
                        <label for="background-color-input">BG Color</label>
                        <input type="color" class="input" id="background-color-input" v-model="block.backgroundColor" />
                    </div>
                    <div class="post-block-controls-item">
                        <label for="font-select">Font</label>
                        <select class="input" id="font-select" v-model="block.font">
                            <option value="Arial">Arial</option>
                            <option value="Tahoma">Tahoma</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Impact">Impact</option>
                        </select>
                    </div>
                    <div class="post-block-controls-item">
                        <label for="font-size-input">Font Size</label>
                        <input type="number" class="input" id="font-size-input" v-model="block.fontSize" />
                    </div>
                    <div class="post-block-controls-item post-block-controls-cb-item">
                        <label for="bold-style-checkbox">Bold</label>
                        <input type="checkbox" class="input checkbox" id="bold-style-checkbox" v-model="block.isBold" />
                    </div>
                    <div class="post-block-controls-item post-block-controls-cb-item">
                        <label for="italic-style-checkbox">Italic</label>
                        <input
                            type="checkbox"
                            class="input checkbox"
                            id="italic-style-checkbox"
                            v-model="block.isItalic"
                        />
                    </div>
                    <div class="post-block-controls-item post-block-controls-cb-item">
                        <label for="underline-style-checkbox">Underline</label>
                        <input
                            type="checkbox"
                            class="input checkbox"
                            id="underline-style-checkbox"
                            v-model="block.isUnderline"
                        />
                    </div>
                </div>
                <div class="post-block-controls" id="post-btns-controls">
                    <button class="btn" @click="changeBlock(post)">Save</button>
                    <button class="btn" @click="deleteBlock(post, block)">Delete</button>
                </div>
            </div>
        </div>
        <div class="post-controls-block">
            <button class="btn" @click="addBlock(post)">Add Block</button>
        </div>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background: #eeeeee;
    padding: 30px 40px;
    border-radius: 15px;
}

.post-blocks-block {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

.post-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
}

#post-btns-controls {
    display: flex;
    justify-content: space-between;
}

.post-block-controls {
    display: flex;
    gap: 8px;
    background: #dddddd;
    padding: 10px 15px;
    border-radius: 8px;
}

.post-block-controls-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
}

.post-block-controls-cb-item {
    width: 65px;
}

textarea {
    width: 100%;
    height: 100px;
    resize: none;
    border-radius: 8px;
    padding: 5px;
    border: 1px solid #bbbbbb;
}

.post-controls-block {
    padding: 10px 15px;
    border-radius: 8px;
    background: #cccccc;
}
</style>
