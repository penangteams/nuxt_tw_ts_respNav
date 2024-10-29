<!-- @format -->

<script setup>
useHead({
  title: "About page",
});

definePageMeta({
  colorMode: "sepia",
  layout: "admin",
});

const { data } = await useFetch("/api/userdetails");
console.log("My data was", data?.value?.mssg);
</script>

<template>
  <div
    class="grid grid-cols-12 md:gap-8 py-10 gap-y-8 min-h-screen bg-gray-200 dark:bg-gray-900 px-5 dark:text-white"
  >
    <div class="col-span-12 md:col-span-6 p-2">
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mi tempus dignissim
        duis nascetur sit diam. Nec primis lobortis mollis vehicula odio. Montes
        ac laoreet fermentum luctus posuere. In accumsan ullamcorper dui;
        placerat curabitur tincidunt ad aliquam. Volutpat sociosqu venenatis
        tempus non maecenas himenaeos. Habitant aliquet nec; consectetur
        volutpat hac euismod condimentum.
      </p>
      <p>
        Aenean quis nulla lacus erat metus ante sem tempus lobortis. Tempus
        cubilia taciti curae vitae consectetur. Ridiculus adipiscing integer
        rutrum vehicula sociosqu; enim ligula nullam torquent. Tincidunt ornare
        nascetur mus ultrices molestie. Penatibus mollis nec nostra vestibulum
        vulputate consectetur. Nunc varius faucibus mus enim ligula? Posuere
        nostra eleifend accumsan maecenas magnis in morbi rhoncus. Euismod
        faucibus ligula ligula aliquam at. Tristique curae consequat id;
        condimentum per cubilia.
      </p>
      <p>
        Placerat senectus congue tellus at aliquet aptent vitae massa. Congue
        euismod maecenas mollis, dictum consectetur cursus. Interdum himenaeos
        magnis leo efficitur, est facilisis neque justo? Conubia fringilla
        tristique integer posuere fames. Convallis gravida sodales adipiscing
        iaculis massa magna. Etiam porttitor suspendisse ullamcorper etiam
        ridiculus tellus molestie. Hac eu luctus orci cursus vulputate natoque
        proin. Habitasse auctor vulputate vulputate nec ultricies elit. Litora
        conubia sodales magna vestibulum rhoncus varius pretium. Habitant mollis
        ad eleifend imperdiet sed.
      </p>
      <p>
        Blandit maximus mi nulla tempus quisque iaculis volutpat mattis mi. Nibh
        tristique praesent lobortis feugiat curae rhoncus ultrices. Dis lacus
        metus aenean feugiat adipiscing cubilia rutrum elementum. Elit nostra
        donec faucibus magna adipiscing fames porttitor. Varius neque mauris et
        cursus venenatis. Ullamcorper diam elementum ex vitae viverra class
        facilisi convallis. Cras quisque aliquet habitasse adipiscing porttitor
        nulla risus praesent. Primis leo nam ad class ullamcorper. Ultricies
        himenaeos nisl hendrerit sit mi.
      </p>
    </div>
    <div class="col-span-12 md:col-span-6 p-2">
      <p>
        Sociosqu purus parturient scelerisque posuere consequat curabitur donec.
        Maecenas ante suscipit facilisi magnis id phasellus cursus urna eros.
        Pellentesque tellus egestas morbi purus cras enim. Penatibus semper
        lobortis arcu adipiscing egestas ridiculus. Accumsan curabitur torquent
        accumsan placerat faucibus vulputate interdum.
      </p>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mi tempus dignissim
        duis nascetur sit diam. Nec primis lobortis mollis vehicula odio. Montes
        ac laoreet fermentum luctus posuere. In accumsan ullamcorper dui;
        placerat curabitur tincidunt ad aliquam. Volutpat sociosqu venenatis
        tempus non maecenas himenaeos. Habitant aliquet nec; consectetur
        volutpat hac euismod condimentum.
      </p>
      <p>
        Aenean quis nulla lacus erat metus ante sem tempus lobortis. Tempus
        cubilia taciti curae vitae consectetur. Ridiculus adipiscing integer
        rutrum vehicula sociosqu; enim ligula nullam torquent. Tincidunt ornare
        nascetur mus ultrices molestie. Penatibus mollis nec nostra vestibulum
        vulputate consectetur. Nunc varius faucibus mus enim ligula? Posuere
        nostra eleifend accumsan maecenas magnis in morbi rhoncus. Euismod
        faucibus ligula ligula aliquam at. Tristique curae consequat id;
        condimentum per cubilia.
      </p>
      <p>
        Placerat senectus congue tellus at aliquet aptent vitae massa. Congue
        euismod maecenas mollis, dictum consectetur cursus. Interdum himenaeos
        magnis leo efficitur, est facilisis neque justo? Conubia fringilla
        tristique integer posuere fames. Convallis gravida sodales adipiscing
        iaculis massa magna. Etiam porttitor suspendisse ullamcorper etiam
        ridiculus tellus molestie. Hac eu luctus orci cursus vulputate natoque
        proin. Habitasse auctor vulputate vulputate nec ultricies elit. Litora
        conubia sodales magna vestibulum rhoncus varius pretium. Habitant mollis
        ad eleifend imperdiet sed.
      </p>
    </div>
    <div class="col-span-12 md:col-span-6 p-2">
      <p>
        Blandit maximus mi nulla tempus quisque iaculis volutpat mattis mi. Nibh
        tristique praesent lobortis feugiat curae rhoncus ultrices. Dis lacus
        metus aenean feugiat adipiscing cubilia rutrum elementum. Elit nostra
        donec faucibus magna adipiscing fames porttitor. Varius neque mauris et
        cursus venenatis. Ullamcorper diam elementum ex vitae viverra class
        facilisi convallis. Cras quisque aliquet habitasse adipiscing porttitor
        nulla risus praesent. Primis leo nam ad class ullamcorper. Ultricies
        himenaeos nisl hendrerit sit mi.
      </p>
      <p>
        Sociosqu purus parturient scelerisque posuere consequat curabitur donec.
        Maecenas ante suscipit facilisi magnis id phasellus cursus urna eros.
        Pellentesque tellus egestas morbi purus cras enim. Penatibus semper
        lobortis arcu adipiscing egestas ridiculus. Accumsan curabitur torquent
        accumsan placerat faucibus vulputate interdum.
      </p>
    </div>
  </div>
</template>
