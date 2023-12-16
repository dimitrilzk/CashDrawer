function addFacebookPostToTable(post, videoData) {
    var htmlTableRow = [];
    var postMessage = managePostText(post.message);
    var postType = post.attachments?.data[0].media_type.toLowerCase();
    var postLikes = post.likes?.summary.total_count;
    var postComments = post.comments?.summary.total_count;
    var postReactions = post.reactions?.summary.total_count;
    var shares = post.shares?.count ?? 0;
    var isVideo = postType == "video" || postType == "video_reel";
    var imageSrc = post.attachments?.data[0].media.image.src ?? "/img/image-placeholder.jpg";

    var positiveCoverage = sumValues((post.insights.data.find(x => x.name == "post_engaged_fan")).values);
    var negativeCoverage = sumValues((post.insights.data.find(x => x.name == "post_negative_feedback_unique")).values);
    var views = sumValues((post.insights.data.find(x => x.name == "post_impressions")).values)
    var coverage = sumValues((post.insights.data.find(x => x.name == "post_impressions_unique")).values);


    //Calcolo del rapporto tra la media di visualizzazione del video e la sua durata intera
    var ratioStr;
    if (isVideo) {

        var wathcedAvgValues = (post.insights.data.find(x => x.name == "post_video_avg_time_watched" && x.period == "day")).values.filter(x => x.value > 0).map(x => {
            x.value = x.value / 1000; //i valori medi sono in millisecondi

            return x;
        });

        if (wathcedAvgValues.length > 0) {

            var totalSeconds = sumValues(wathcedAvgValues);

            var ratio = ((totalSeconds / wathcedAvgValues.length) / videoData.length) * 100;

            ratioStr = ${ ratio.toFixed(2) } %;
        }
        else {
            ratioStr = "-";
        }
    }


    htmlTableRow.push(<tr data-postid=${post.id}>);
        htmlTableRow.push(<td>);
            if (imageSrc) {
                htmlTableRow.push(<img src="${imageSrc}" class="postImg">);
    }
                    htmlTableRow.push(</td>);
            htmlTableRow.push(<td class="postText">);
                htmlTableRow.push(${postMessage});
                htmlTableRow.push(</td>);

            htmlTableRow.push(<td>);
                htmlTableRow.push(${postType});
                htmlTableRow.push(</td>);

            if (isVideo) {
                htmlTableRow.push(<td>);
                    htmlTableRow.push(${ratioStr});
                    htmlTableRow.push(</td>);
    }

            //numero di like e commenti
            htmlTableRow.push(<td>);
                htmlTableRow.push(${postLikes});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${postComments});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${shares});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${postReactions});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${views});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${coverage});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${positiveCoverage});
                htmlTableRow.push(</td>);
            htmlTableRow.push(<td>);
                htmlTableRow.push(${negativeCoverage});
                htmlTableRow.push(</td>);
            htmlTableRow.push(</tr>)

    if (!isVideo) {
        postsTable.row.add($(htmlTableRow.join(""))).draw();
    }
    else {
        videosTable.row.add($(htmlTableRow.join(""))).draw();
    }
}