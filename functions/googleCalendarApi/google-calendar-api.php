<?php
$api_key = "";
$calendar_id = urlencode('japanese__ja@holiday.calendar.google.com');
$start = date('2020-01-01\T00:00:00\Z');
$end = date('2020-12-31\T00:00:00\Z');

$url = "https://www.googleapis.com/calendar/v3/calendars/". $calendar_id . "/events?";
$query = [
  'key' => $api_key,
  'timeMin' => $start,
  'timeMax' => $end,
  'maxResult' => 50,
  'orderBy' => 'startTime',
  'singleEvents' =>'true'
];
$complete_url = $url . http_build_query($query);

$result =[];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $complete_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$datas = json_decode(curl_exec($ch));
curl_close($ch);

foreach($datas->items as $data){
  $result[$data->start->date] = $data->summary;
}

echo "<pre>";
var_dump($result);
echo "</pre>";
