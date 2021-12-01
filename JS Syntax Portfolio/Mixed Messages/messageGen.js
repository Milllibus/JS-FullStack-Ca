const takeRandom = arr => {
  index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

const sign = ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn'];
const love = ["Not surprisingly, you could score a potentially high hit rate at parties. Everyone will respond to your charming smile. For once, you actually have a choice of dates. Friends can have the strangest reactions to your love life. One person may actually be upset that you're dating and having fun.", "New and attractive people are about to enter your life. This dynamic day offers you many new possibilities. Someone you have been trying to get know finally has the courage to tell you how they feel about you. This is a surprise, as only a while ago they wouldn't even look you in the eye!", "There could be a little controversy in your day, but the possibilities of true communication are also enhanced. You and your loved one may find it hard to agree on anything today. You've got to deal with things on a deeper level than usual thanks to your emotions starting to manifest now. You might surprise your partner with some surprisingly heavy sentiments.", "Listen carefully to those around you and keep your cool. You are feeling motivated to make some changes and feel supported by those closest to you. Remain upbeat and positive, even if your partner is not. This is your day. Enjoy it on your own terms. Relax but be gratify for all you have.","Today you enjoy a peaceful sense of intimacy with your partner. Enhancing your powers of attraction during this cycle involves expressing your more competent and responsible side, sharing goals with a partner, making solid plans for the future, and sharing activities that make you and your partner feel secure, accountable, and appreciated. Enjoy what you've got right now, especially in your romantic relationship.", "Today may bring the chance for a vital conversation to take place.There's something you need to talk over. If you have been waiting for an opportunity to ask your loved one how they feel about a certain plan or project you have in mind for both of you, then do so now. It's time to make some major decisions. Have a heart to heart with your significant other. Listen to advice and avoid taking excessive risks."];
const predict = ["A change in career might prompt the need or option to travel. The journey may open your ideas to new and exciting spiritual paths. Enjoy social interactions with friends and family who will be receptive to your charm. It may be time to enroll in higher ed or take a class to learn something new. You are effectively balancing work and home life concerns. Your emotions run high, both love and hate, but you feel self confident. Your driving force is your family now rather than the daily chores that seem to take up too much time. Avoid losing your temper. Anger would undo all the good work of the past few weeks.", "This is a good day for examining your own behavior and looking inside you to understand your motivations a bit more. You could be caught up in a little drama, perhaps involving a difference of opinion with those around you. From a financial point of view, your efforts to earn more money will be rewarded in the coming period. Take care of the quality of your work. Your diligence and effort will finally be in the eyes of someone important, and finally, someone will notice your diligence.", "A partner or close companion may accompany you on a short trip. Be careful how you travel and what you eat while you are away. You may be on the verge of a big sale or purchase. Be sure to weigh all options carefully. Make time for spiritual reflection as a break from all your monetary concern. Reviving old connections assists you professionally and financially today. A positive attitude helps you attain a position you've dreamed about. Faith makes it happen. Your hard work and determination yield results. You can certainly count on a raise in both status and self image today. In any case, money and perks are more than good enough.", "True happiness may elude you at present. You may feel separated or restrained in some way. This feeling is only temporary, as new beginnings are on their way. In the meantime, make the most of this time of seclusion to be introspective. Recap from all your socializing by getting extra rest and attending to your physical and mental well being. Focus on learning new areas that interest you. Learn a new language, sign up for a cooking or pottery course. Do whatever fills you with positive energy."];

const prediction = `${takeRandom(sign)}\n\nToday:\n${takeRandom(predict)}\n\nLove:\n${takeRandom(love)}`;
console.log(prediction);