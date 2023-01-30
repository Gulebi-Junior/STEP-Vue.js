<script>
export default {};
</script>

<template>
    <div class="post">
        <div class="post-block">
            <textarea class="textarea">Block Text</textarea>
            <div class="post-block-controls">
                <input type="text" class="input" placeholder="Text Color" />
                <input type="text" class="input" placeholder="Background Color" />
                <input type="text" class="input" placeholder="Font Name" />
                <input type="number" class="input" placeholder="Font Size" />
                <select class="input" placeholder="Font Style">
                    <option value="">-Choose Font Style-</option>
                    <option value="normal">Normal</option>
                    <option value="italic">Italic</option>
                </select>
            </div>
            <div class="post-block-controls">
                <button class="btn">Save</button>
                <button class="btn">Delete</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post {
    background: #eeeeee;
    padding: 30px 40px;
    border-radius: 15px;
}

.post-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
}

.post-block-controls {
    display: flex;
    gap: 5px;
    background: #dddddd;
    padding: 10px 15px;
    border-radius: 8px;
}

.textarea {
    width: 100%;
    height: 100px;
    resize: none;
    border-radius: 8px;
    padding: 5px;
    border: 1px solid #bbbbbb;
}
</style>
