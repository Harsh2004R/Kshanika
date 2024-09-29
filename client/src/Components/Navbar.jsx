'use client'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    useColorModeValue,
    useDisclosure,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    Center,
    MenuDivider,
    MenuItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Image,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import "../App.css"
import Logo from "../assets/kshanika_logo.png"
export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box position={"fixed"} top={"0"} w="100%" h="60px" bg="red">
            <Flex
                h="60px"
                bg="#202321"
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    // border={"1px solid green"}
                    flex={{ base: 0, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon bgColor={"transparent"} color={"#fff"} w={3} h={3} /> : <HamburgerIcon bgColor={"transparent"} color={"#fff"} w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    //  border={"1px solid red"}
                    flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Box display={{ base: "none", md: "block", lg: "block" }} w="50px" h={"50px"}>
                        <Image src={Logo} w="100%" h="100%" alt="Hommi.art.logo.png" />
                    </Box>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems={"center"}>
                        <DesktopNav />
                    </Flex>
                </Flex>



                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                            w="40px" h="40px"
                            src={'https://img.freepik.com/premium-photo/user-profile-icon_861346-90577.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid'}
                        />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={'https://img.freepik.com/premium-photo/user-profile-icon_861346-90577.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <Text fontSize={{ base: "xl", md: "xl", lg: "2xl" }} fontFamily={"writing2"} color={"#42A5F5"}>Username</Text>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem fontSize={{ base: "md", md: "md", lg: "xl" }} fontFamily={"writing2"}>Your Servers</MenuItem>
                        <MenuItem fontSize={{ base: "md", md: "md", lg: "xl" }} fontFamily={"writing2"}>Account Settings</MenuItem>
                        <MenuItem fontSize={{ base: "md", md: "md", lg: "xl" }} fontFamily={"writing2"}>Signup</MenuItem>
                        <MenuItem fontSize={{ base: "md", md: "md", lg: "xl" }} fontFamily={"writing2"}>Login</MenuItem>
                        <MenuItem fontSize={{ base: "md", md: "md", lg: "xl" }} fontFamily={"writing2"}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = "#d9dcda"
    const linkHoverColor = "#fff"
    const popoverContentBgColor = "#cccccc"

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={{ md: "20px", lg: "20px" }} fontFamily={"writing2"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}
                        fontFamily={"writing2"}
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'} fontFamily={"writing2"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Stack bg='#202321' p={4} display={{ md: 'none' }}>
            <Box w='100px' h="100px">
                <Image w="100%" h="100%" src={Logo} alt="logo.png" />
            </Box>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={6}
                as="a"
                bg="#202321"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Flex>
                    <Text fontSize={{ base: "md", md: "md", lg: "xl" }} fontFamily={"writing2"} color="#d9dcda">
                        {label}
                    </Text>
                    {children && (
                        <Icon
                            as={ChevronDownIcon}
                            transition={'all .25s ease-in-out'}
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            w={6}
                            h={6}
                            color="#d9dcda"
                        />
                    )}
                </Flex>
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                <Text fontSize={"12px"} fontFamily={"writing2"} color={"#d9dcda"}>{child.label}</Text>
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

const NAV_ITEMS = [
    {
        label: 'Inspiration',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Find Work',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
]
