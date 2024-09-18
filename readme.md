# How to Use

Please make sure you have the live-server extension installed. To activate the live-server, press `cmd+shift+p` and search for the command `Live Server: Open with Live Server`. This will open a live server in your browser that's automatically updated with any changes you make to the sketch.js file. Functions you can use to get values out of the dataset are:

- setResponsiveSizing
- getMinValue
- getMaxValue
- getAverageValue
- getTrueFalse
- getUniqueValues
- findByPropertyValue
- getMedianValue
- getSumOfValues

# How to add your own data

### Get a dataset

Some suggestions:

- Import wikipedia tables into google sheets by using `=IMPORTHTML("[DATASETNAME]", "table", 1)`
- Take a screenshot of a chart and ask chatGPT to convert it to a table

### Upload the data into the folder

If you haven't already, convert your data to .json format, and add it to a new file or overwrite the existing file: the choice is all yours! Whatever you do, make sure the helper functions are able to reach the dataset.

# I made a poster and it's almost 4pm, now what??

[Check this out](https://github.com/cleverfranke/cf-kiosk)

# Data Structure

Per subtopic, we have gathered some data, in this overview you'll find the available data per subtopic, and their source in case you need some explanation (communication team, we got you).

### General

- population
- land_area_m2
- population_density

### Happiness

https://worldpopulationreview.com/country-rankings/happiest-countries-in-the-world

- world_happiness_report_ranking_2024
- world_happiness_report_score_2024
- world_happiness_report_ranking_2023
- world_happiness_report_score_2023
- world_happiness_report_ranking_2022
- world_happiness_report_score_2022

### Communication

#### Communication styles, societal practices and societal values

https://data.world/adamhelsinger/globe-project

- uncertainty_avoidance_societal_practices
- future_orientation_societal_practices
- power_distance_societal_practices
- institutional_collectivism_societal_practices
- humane_orientation_societal_practices
- performance_orientation_societal_practices
- in_group_collectivism_societal_practices
- gender_egalitarianism_societal_practices
- assertiveness_societal_practices
- uncertainty_avoidance_societal_values
- future_orientation_societal_values
- power_distance_societal_values
- institutional_collectivism
- human_orientation_societal_values
- performance_orientation_societal_values
- in_group_collectivism_societal_values
- gender_egalitarianism_societal_values
- assertiveness_societal_values

### Celebrations

#### Holidays

https://en.wikipedia.org/wiki/List_of_countries_by_number_of_public_holidays

- min_nr_public_holidays
- max_nr_public_holidays

#### National days

https://en.wikipedia.org/wiki/National_day

- national_holiday_date
- national_holiday_significance
- national_holiday_description

### Language

#### Number of languages by country

https://en.wikipedia.org/wiki/Number_of_languages_by_country

- amount_established_languages
- amount_immigrant_languages
- amount_total_languages
- total_nr_speakers
- mean_nr_speakers
- median_nr_speakers

#### Hours to learn a language

https://effectivelanguagelearning.com/language-guide/language-difficulty/

- language
- hours_to_learn

### Architecture

#### Heritage sites

https://en.wikipedia.org/wiki/World_Heritage_Sites_by_country

- cultural_sites
- natural_sites
- mixed_sites
- total_sites

#### urbanisation

https://en.wikipedia.org/wiki/Urbanization_by_sovereign_state

- urban_population_2022
- percent_of_population_2023
- urbanisation_rate_2020-2025

### Food

#### Vegetarianism

https://worldpopulationreview.com/country-rankings/vegetarianism-by-country

- vegetarianism_by_country_perc_vegetarian
- vegetarianism_by_country_total_vegetarian
- vegetarianism_by_country_perc_vegan
- vegetarianism_by_country_total_vegan
- vegetarianism_by_country_data_year

#### National dish

https://en.wikipedia.org/wiki/National_dish

- national_dish

#### Number of Michelin star restaurants

https://www.statista.com/statistics/1400971/countries-most-michelin-starred-restaurants-worldwide/#:~:text=France%20was%20the%20country%20with,387%20restaurants%20with%20Michelin%20stars.

- number_of_michelin_restaurants

#### Average number of meals cooked per week

https://static.cookpad.com/worldcookingindex/Cookpad_WorldCookingIndex_Report_Year5.pdf

- meals_cooked_per_week_2021
- meals_cooked_per_week_2022

#### Average daily energy consumption

https://en.wikipedia.org/wiki/List_of_countries_by_food_energy_intake

- avg_daily_energy_consumption

### Music

#### Favourite genres by country

https://www.kaggle.com/datasets/marshalll3302/favorite-music-genres-by-country?resource=download

- hiphop_rap_r_and_b
- EDM
- pop
- rock_metal
- latin_reggaeton
- other

#### Other music statistics

https://musicbrainz.org/statistics/countries

- artists
- releases
- labels
- events
- places

#### National anthem

https://en.wikipedia.org/wiki/List_of_national_anthems

- national_anthem_title
- national_anthem_translation
- national_anthem_length
- national_anthem_date_adopted

#### Most popular national instrument

https://en.wikipedia.org/wiki/List_of_national_instruments_(music)

- instrument

### Education

#### Universities

https://www.webometrics.info/en/distribution_by_country

- universities_in_top_100
- universities_in_top_101-500
- universities_in_top_501-1000
- universities_in_top_1001-5000
- universities_in_top_5001-10000
- total_universities

#### Most popular subject

https://potomac.edu/the-most-popular-degrees-in-us-and-worldwide/

- most_popular_subject_1st_degree
- most_popular_subject_2nd_degree
- most_popular_subject_3rd_degree

### Landscape

#### Forest area

https://www.worldometers.info/food-agriculture/forest-by-country/

- forest_area_ha

#### Elevation

https://en.wikipedia.org/wiki/List_of_countries_by_average_elevation
https://en.wikipedia.org/wiki/List_of_elevation_extremes_by_country

- avg_elevation_m
- highest_point
- maximum_elevation_m
- lowest_point
- minimum_elevation_m
- elevation_span_m

### Sports

#### Olympics

https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table

- times_participating_in_olympics

#### Most popular sports

https://worldpopulationreview.com/country-rankings/most-popular-sport-by-country

- most_popular_sport

### Art

#### Museums

https://www.museumworldranking.net/?by=country

- museums_in_world_top_300

#### Artists

https://www.wikiart.org/en/artists-by-nation

- recognized_artists
