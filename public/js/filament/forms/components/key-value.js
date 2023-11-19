function r({ state: i }) {
    return {
        state: i,
        rows: [],
        shouldUpdateRows: !0,
        init: function () {
            this.updateRows(),
                this.rows.length <= 0 && this.addRow(),
                this.updateState(),
                this.$watch('state', (t, e) => {
                    let s = (o) =>
                        o === null
                            ? 0
                            : Array.isArray(o)
                              ? o.length
                              : typeof o != 'object'
                                ? 0
                                : Object.keys(o).length;
                    (s(t) === 0 && s(e) === 0) || this.updateRows();
                });
        },
        addRow: function () {
            this.rows.push({ key: '', value: '' }), this.updateState();
        },
        deleteRow: function (t) {
            this.rows.splice(t, 1), this.rows.length <= 0 && this.addRow(), this.updateState();
        },
        reorderRows: function (t) {
            let e = Alpine.raw(this.rows),
                s = e.splice(t.oldIndex, 1)[0];
            e.splice(t.newIndex, 0, s), (this.rows = e), this.updateState();
        },
        updateRows: function () {
            if (!this.shouldUpdateRows) {
                this.shouldUpdateRows = !0;
                return;
            }
            let t = [];
            for (let [e, s] of Object.entries(this.state ?? {})) t.push({ key: e, value: s });
            this.rows = t;
        },
        updateState: function () {
            let t = {};
            this.rows.forEach((e) => {
                e.key === '' || e.key === null || (t[e.key] = e.value);
            }),
                (this.shouldUpdateRows = !1),
                (this.state = t);
        },
    };
}
export { r as default };