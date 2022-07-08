import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "https://www.theguardian.com/profile/chris-stein,https://www.theguardian.com/profile/coral-murphy-marcos,https://www.theguardian.com/profile/peter-stone,https://www.theguardian.com/profile/hugo-lowell",
        "title": "Democrats race to agree climate deal but Manchin a potential obstacle – live - The Guardian US",
        "description": "Centrist West Virginia senator remains sticking point in negotiations over spending package – follow all the latest news",
        "url": "https://www.theguardian.com/us-news/live/2022/jul/07/biden-democrats-climate-crisis-manchin-presidential-medal-freedom-latest",
        "urlToImage": "https://i.guim.co.uk/img/media/8225f29e49059575177aa59001c07cd5c41abe61/0_141_4253_2553/master/4253.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=4efa936fd13c4cfd0078bd3820b020d2",
        "publishedAt": "2022-07-07T14:33:31Z",
        "content": "When they were negotiating Build Back Better last year, president Joe Biden and Democratic leaders made proposals, and then tried to get all their lawmakers in Congress on board. The effort ended up … [+7603 chars]"
    }, {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Jennifer Rubin",
        "title": "Opinion | Cipollone will cooperate - The Washington Post",
        "description": "Now the question is what questions he will answer.",
        "url": "https://www.washingtonpost.com/opinions/2022/07/07/january-6-committee-hearing-trump-has-every-reason-to-panic-cipollone-testimony/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZSIQDJH5HUI6ZM45OEYJC2ABJM.jpg&w=1440",
        "publishedAt": "2022-07-07T13:50:38Z",
        "content": "Comment on this story\r\nFormer White House counsel Pat Cipollone has been the missing man at the hearings for the House select committee investigating the Jan. 6 insurrection. Although present at the … [+4741 chars]"
    }, {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Brittney Griner set to appear in Russian court after Biden, Harris call - CBS Mornings",
        "description": "Supporters of Brittney Griner rallied at the Phoenix Mercury's arena Wednesday to push for the release of the WNBA star from a Russian prison. It comes as Gr...",
        "url": "https://www.youtube.com/watch?v=WB4o2U6yEho",
        "urlToImage": "https://i.ytimg.com/vi/WB4o2U6yEho/maxresdefault.jpg",
        "publishedAt": "2022-07-07T13:26:04Z",
        "content": null
    }, {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Bevin Prince's Husband William Friend Died After Being Struck By Lightning - Us Weekly",
        "description": "Subscribe for more Us Weekly videos! - https://bit.ly/33yer6Ohttps://www.usmagazine.com/Follow Us Weekly on Facebook: https://www.facebook.com/UsWeeklyFollow...",
        "url": "https://www.youtube.com/watch?v=3GFf7AeTb5g",
        "urlToImage": "https://i.ytimg.com/vi/3GFf7AeTb5g/hqdefault.jpg",
        "publishedAt": "2022-07-07T13:23:56Z",
        "content": null
    }, {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Jeff Cox",
        "title": "Jobless claims edge up to highest since January; planned layoffs soar; trade deficit hits 2022 low - CNBC",
        "description": "Weekly jobless claims nudged higher while the U.S. trade deficit hit its lowest level of the year in May.",
        "url": "https://www.cnbc.com/2022/07/07/jobless-claims-edge-up-to-highest-since-january-trade-deficit-hits-2022-low.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106890904-16225833752021-06-01t204911z_1849495490_rc2trn9o3c13_rtrmadp_0_usa-economy.jpeg?v=1622583570&w=1920&h=1080",
        "publishedAt": "2022-07-07T13:23:16Z",
        "content": "Weekly jobless claims nudged higher while the U.S. trade deficit hit its lowest level of the year in May as Covid-related shutdowns gripped China, according to economic data released Thursday.\r\nIniti… [+2493 chars]"
    }, {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Haley Ott",
        "title": "U.K. Prime Minister Boris Johnson announces resignation after dozens of colleagues quit over string of scandals - CBS News",
        "description": "The embattled British leader is finally bowing out after a tumultuous week of high-profile resignations and a litany of scandals raising questions about his credibility.",
        "url": "https://www.cbsnews.com/news/boris-johnson-resignation-uk-prime-minister-conservative-party/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/07/07/5580df79-5248-4f8e-8526-de74204558c9/thumbnail/1200x630/70991935924bbedff74b336494cae02f/2022-07-07t114822z-163344067-rc2z6v91jke9-rtrmadp-3-britain-politics.jpg",
        "publishedAt": "2022-07-07T13:23:00Z",
        "content": "London — After defiantly rejecting calls for his resignation, U.K. Prime Minister Boris Johnson said Thursday that he would step down as leader of his party, which will eventually see him removed fro… [+6403 chars]"
    }, {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Pippa Stevens",
        "title": "Gasoline futures are dropping, which could mean more relief at the pump - CNBC",
        "description": "Gas prices could be about to drop.",
        "url": "https://www.cnbc.com/2022/07/07/gasoline-futures-are-dropping-which-could-mean-more-relief-at-the-pump.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107073778-1654806653860-gettyimages-1401974655-dsc_6513_6b5ab4f8-15b0-4973-9e58-95d1aa1bd5d1.jpeg?v=1654806779&w=1920&h=1080",
        "publishedAt": "2022-07-07T12:49:45Z",
        "content": "Prices at the pump have retreated from June's never-before-seen levels but remain stubbornly high.\r\nSome relief could be in sight. U.S. gasoline futures have dropped more than 11% this week, followin… [+2939 chars]"
    }, {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Laura Feinstein",
        "title": "Barbara Kruger: 'Anyone who is shocked by what is happening has not been paying attention' - The Guardian",
        "description": "The outspoken artist talks about the repeal of Roe v Wade and the legacy of her art, as a number of exhibitions of her work go on view",
        "url": "https://amp.theguardian.com/artanddesign/2022/jul/07/barbara-kruger-artist-roe-v-wade-abortion-art",
        "urlToImage": null,
        "publishedAt": "2022-07-07T12:40:00Z",
        "content": "ArtThe outspoken artist talks about the repeal of Roe v Wade and the legacy of her art, as a number of exhibitions of her work go on view\r\nFew creators can claim the Museum of Modern Art and Rage Aga… [+8321 chars]"
    }, {
        "source": {
            "id": "nfl-news",
            "name": "NFL News"
        },
        "author": "Associated Press",
        "title": "NFL makes strong push for flag football with eye on Olympics - NFL.com",
        "description": "Flag football will be played at an international, multi-sport event for the first time next week during the World Games in Birmingham, Alabama. The NFL may be the sport's biggest cheerleader.",
        "url": "https://www.nfl.com/news/nfl-makes-strong-push-for-flag-football-with-eye-on-olympics",
        "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/v0b6s6fkmqnudkcqabtn",
        "publishedAt": "2022-07-07T12:39:00Z",
        "content": "Flag football will be played at an international, multi-sport event for the first time next week during the World Games in Birmingham, Alabama.\r\nThe NFL may be the sport's biggest cheerleader.\r\n\"When… [+3330 chars]"
    }, {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Jake Lourim",
        "title": "Shohei Ohtani pitches, hits his way into history again - The Washington Post",
        "description": "The Angels star became the first player to strike out 10 batters, drive in two runs and steal a base in the same game in the modern baseball era.",
        "url": "https://www.washingtonpost.com/sports/2022/07/07/shohei-ohtani-record/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XDZL25X5REI6ZM45OEYJC2ABJM.jpg&w=1440",
        "publishedAt": "2022-07-07T12:30:00Z",
        "content": "Comment on this story\r\nShohei Ohtanis dominance has almost become normal, and yet he often finds a new way to make history. Wednesday was another one of those nights as Ohtani put himself in a class … [+2345 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Akron Beacon Journal"
        },
        "author": ", Akron Beacon Journal",
        "title": "Jayland Walker protest: Akron police arrest Jacob Blake, Bianca Taylor - Akron Beacon Journal",
        "description": "Protests continued across Akron Wednesday night with police making numerous arrests, court records show; social media posts say people being detained",
        "url": "https://www.beaconjournal.com/story/news/2022/07/07/jayland-walker-akron-police-arrest-protesters-jacob-blake-bianca-taylor/7827915001/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/07/07/NABJ/1ad97110-e28f-4ecd-a839-6d274ad72652-20220706WednesdayNightChases-005.jpg?auto=webp&crop=2399,1350,x0,y122&format=pjpg&width=1200",
        "publishedAt": "2022-07-07T12:05:12Z",
        "content": "Two high-profile national critics of police violence were arrested in Akron Wednesday night as protests over the death of Jayland Walker continued.\r\nPolice made numerous others arrests, according to … [+2842 chars]"
    }, {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Sophie Reardon",
        "title": "Nipsey Hussle: Eric Holder found guilty in shooting death of rapper - CBS News",
        "description": "Hussle was fatally shot outside of the clothing store he owned in Los Angeles in March 2019.",
        "url": "https://www.cbsnews.com/news/nipsey-hussle-shooting-death-eric-holder-guilty/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2019/05/16/5a95872f-65d1-4b11-add9-b12f7eb0a2a2/thumbnail/1200x630/03b54536253dbfeefd14680ec157db4b/nipsey-hussle-1095294622.jpg",
        "publishedAt": "2022-07-07T11:58:00Z",
        "content": "Eric Holder, the man charged in the fatal shooting of Grammy-nominated rapper Nipsey Hussle, was found guilty of first-degree murder on Wednesday, CBS Los Angeles reported. The jury deliberated for a… [+1929 chars]"
    }, {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Ryan Gaydos",
        "title": "Baker Mayfield trade: Robby Anderson addresses past remarks regarding new quarterback - Fox News",
        "description": "The Carolina Panthers agreed to acquire Baker Mayfield from the Cleveland Browns, which led to questions about Robby Anderson's past comments.",
        "url": "https://www.foxnews.com/sports/baker-mayfield-trade-robby-anderson-remarks",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/Robby-Anderson3.jpg",
        "publishedAt": "2022-07-07T11:03:56Z",
        "content": "Carolina Panthers wide receiver Robby Anderson pushed back on claims he had an issue with Baker Mayfield, following the team agreeing to acquire the quarterback from the Cleveland Browns.\r\nAndersons … [+2130 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Madison.com"
        },
        "author": "Will Kubzansky | Wisconsin State Journal",
        "title": "Alleged Highland Park shooter 'seriously contemplated' Madison shooting, authorities say - Madison.com",
        "description": "The alleged shooter who attacked an Independence Day parade in Highland Park, Illinois, and then drove to Madison “seriously contemplated” attacking a celebration in Madison on the same day, police",
        "url": "https://madison.com/news/local/crime-and-courts/alleged-highland-park-shooter-seriously-contemplated-madison-shooting-authorities-say/article_2c74be4f-9616-52ba-8372-8c6772cbd821.html",
        "urlToImage": "https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/2/c7/2c74be4f-9616-52ba-8372-8c6772cbd821/62c5b0ce25e54.preview.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
        "publishedAt": "2022-07-07T10:50:00Z",
        "content": "The alleged shooter who attacked an Independence Day parade in Highland Park, Illinois, and then drove to Madison seriously contemplated attacking a celebration in Madison on the same day, police sai… [+7503 chars]"
    }, {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Ukraine raises flag on recaptured island as Russia consolidates gains in east - Reuters",
        "description": "Ukrainian forces raised their national flag on a recaptured Black Sea island on Thursday in a symbol of defiance against Moscow, but Russian forces consolidated gains in eastern Ukraine and probed the defences of potential new targets.",
        "url": "https://www.reuters.com/world/russia-warns-humanity-risk-if-west-seeks-punish-it-over-ukraine-2022-07-07/",
        "urlToImage": "https://www.reuters.com/resizer/V8wnCWa9dhmqf9bblmWDAx-xUW4=/960x502/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YOLLRFVLE5PFNNHHIKEFN3OM24.jpg",
        "publishedAt": "2022-07-07T10:45:00Z",
        "content": "KYIV, July 7 (Reuters) - Ukrainian forces raised their national flag on a recaptured Black Sea island on Thursday in a symbol of defiance against Moscow, but Russian forces consolidated gains in east… [+5127 chars]"
    }, {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "ABC News",
        "title": "China lashes out at US, British intelligence services - ABC News",
        "description": "China is calling the United States “the biggest threat to world peace, stability and development,\" continuing its sharp rhetoric in response to U.S. accusations of Chinese spying and threats to the international order",
        "url": "https://abcnews.go.com/US/wireStory/china-lashes-us-british-intelligence-services-86358635",
        "urlToImage": "https://s.abcnews.com/images/US/WireAP_d60b14bcca874dde8d8029c50767aa82_16x9_992.jpg",
        "publishedAt": "2022-07-07T10:39:15Z",
        "content": "BEIJING -- The United States is the biggest threat to world peace, stability and development,\" China said Thursday, continuing its sharp rhetoric in response to U.S. accusations of Chinese spying and… [+3142 chars]"
    }, {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Julia Black",
        "title": "Elon Musk and Top Executive Shivon Zilis Had Twins Last November - Business Insider",
        "description": "Court documents show that Elon Musk and a 36-year-old Neuralink executive, Shivon Zilis, are the parents of 8-month-old twins. Musk now has nine known children.",
        "url": "https://www.businessinsider.com/elon-musk-shivon-zilis-secret-twins-neuralink-tesla",
        "urlToImage": "https://i.insider.com/62c5fac88045920019adefdc?width=1200&format=jpeg",
        "publishedAt": "2022-07-07T10:24:18Z",
        "content": "Court documents obtained by Insider show that the tech mogul Elon Musk quietly had twins last November with one of his top executives, Shivon Zilis. Musk, who has been an outspoken advocate of bringi… [+11398 chars]"
    }, {
        "source": {
            "id": null,
            "name": "FiveThirtyEight"
        },
        "author": "Jared Dubin",
        "title": "The NBA Teams That Leveled Up — And Found Bargains — In Free Agency - FiveThirtyEight",
        "description": "Who made a splash in NBA free agency?",
        "url": "https://fivethirtyeight.com/features/the-nba-teams-that-leveled-up-and-found-bargains-in-free-agency/",
        "urlToImage": "https://fivethirtyeight.com/wp-content/uploads/2022/07/GettyImages-1376916444-16x9-1.jpg?w=712",
        "publishedAt": "2022-07-07T10:01:06Z",
        "content": "New Boston Celtics guard Malcolm Brogdon was one of the summers best under-the-radar pickups.Michael Reaves / Getty Images\r\nOn Wednesday, we wrote about three big moves from the first week of NBA fre… [+9843 chars]"
    }, {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Ben Cohen",
        "title": "The NASA Engineer Who Made the James Webb Space Telescope Work - The Wall Street Journal",
        "description": "Greg Robinson, whose boss calls him “the most effective leader of a mission I have ever seen,” turned a $10 billion debacle into a groundbreaking scientific undertaking. Every moonshot is the result of marginal improvements.",
        "url": "https://www.wsj.com/articles/nasa-james-webb-space-telescope-greg-robinson-images-11657137487",
        "urlToImage": "https://images.wsj.net/im-578101/social",
        "publishedAt": "2022-07-07T09:30:00Z",
        "content": null
    }, {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Ukrayinska Pravda",
        "title": "Russians attacking positions of Ukrainian Air Defence with \"air-to-surface\" missiles; Armed Forces of Ukraine are actively resisting - Yahoo News",
        "description": "VALENTYNA ROMANENKO - THURSDAY, 7 JULY 2022, 11:32 The Russian army is using anti-radar air-to-surface missiles to try to destroy positions of the Ukrainian ...",
        "url": "https://news.yahoo.com/russians-attacking-positions-ukrainian-air-083228728.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/0p8v3QHqpCYF4FoqFmu6WA--~B/aD0zODc7dz02OTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ukrayinska_pravda_articles_451/68efd96ed9be5a56655e4adc6d0ed98e",
        "publishedAt": "2022-07-07T08:32:28Z",
        "content": "VALENTYNA ROMANENKO – THURSDAY, 7 JULY 2022, 11:32\r\nThe Russian army is using anti-radar air-to-surface missiles to try to destroy positions of the Ukrainian Air Defence, but the Armed Forces of Ukra… [+1015 chars]"
    }]

    constructor(){
        super();
        this.state = {
            article : this.articles,
            loading : false
        }
    }
  render() {
    return (
        <div className="container  my-3">
            <div className="row" >
                {
                this.state.article.map=(element)=>{
                    return <div className="col-md-4" key={element.url}>
                                <NewsItem title = {element.title} description = {element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                            </div>
                    }   
                }
                
            </div>
        
        </div>
    )
  }
}

export default News
