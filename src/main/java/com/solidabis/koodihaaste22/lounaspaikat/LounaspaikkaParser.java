package com.solidabis.koodihaaste22.lounaspaikat;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class LounaspaikkaParser {
    public List<LounasPaikka> parse(String html) {
        var document = Jsoup.parse(html);
        var restaurantElements = document.select("div.menu.item");
        return restaurantElements.stream()
                .map(this::parseRestaurant)
                .collect(Collectors.toList());
    }

    private LounasPaikka parseRestaurant(Element element) {
        return LounasPaikka.builder()
                .name(element.select("h3 a").text())
                .openingHours(element.select("p.lunch.closed").text())
                .city(parseCity(element.select("div.item-footer p").attr("title")))
                .dishes(parseDishes(element))
                .build();
    }

    private List<Dish> parseDishes(Element element) {
        var dishElements = element.select("li.menu-item")
                .stream().map(this::parseDish);
        return dishElements.collect(Collectors.toList());
    }

    private Dish parseDish(Element dish) {
        return Dish.builder()
                .name(dish.select("p.dish").text())
                .attributes(dish.select("p.dish a").stream().map(Element::text).collect(Collectors.toList()))
                .build();
    }

    private String parseCity(String address) {
        return Arrays.stream(address.split(" "))
                .reduce((first, second) -> second)
                .orElse(null);
    }
}
