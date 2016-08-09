Object.create(parent);

var child= Object.create(parent, {
        dataDescriptor: {
            value: "value",writable: true,enumerable: true
        },
        accessorDesc: {
            get: function() { return accessorDesc; },
            set: function(val) { accessorDesc= val; },
            configurable: true
        }
});