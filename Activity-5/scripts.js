(function() {

    var data = [
        {
            name: 'Trailing Spaces',
            description: 'Highlights trailing spaces and deletes them.',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: 1651858,
            stars: 54,
            price: 0.00,
            selector: 'p1'
        },
        {
            name: 'One Dark Pro',
            description: 'Dark theme for VS Code.',
            author: 'binarify',
            url: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme',
            downloads: 8174676,
            stars: 201,
            price: 0.00,
            selector: 'p2'


        }
    ];

    function Package(data) {
        this.name = data.name;
        this.descrption = data.descriptiom;
        this.author = data.description;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selectors;

        this.getFormattedDownloads = function() {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        stars.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var trailing = new Package(data[0]);
    writePackageInfo(trailing);

    var dark = new Package(data[1]);
    writePackageInfo(dark);
    
})